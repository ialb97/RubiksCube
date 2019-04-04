"use strict";

var canvas;
var gl;

var NumVertices  = 972;

var points = [];
var colors = [];
var transform = [[],[],[],[]];
var camtran = mat4();
var save = "";
var direcsave = "";
var load = "";
var direcload = "";

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = 0;
var theta = [ 3, 25, 0 ];

var program;
var rotc;
var thetaLoc;
var rotationtop = 0;
var rotationbot = 0;
var rotationmid_h = 0;
var rotationfront = 0;
var rotationmiddle = 0;
var rotationback = 0;
var rotationleft = 0;
var rotationright = 0;
var rotationmid_v = 0;
var direc = 0;
var cubeXRotation   = 0;
var cubeYRotation   = 0;
var cubeZRotation   = 0;
var startan = 0;
var antime = 500;
var xrot = 0;
var yrot = 0;
var zrot = 0;
var num = 0;
var cubeChecked = 1;
var buttonsdisable = 0;

var cubeobj = function(index) {this.index = index;};
cubeobj.prototype.xrot = 0;
cubeobj.prototype.yrot = 0;
cubeobj.prototype.zrot = 0;
cubeobj.prototype.numx = 0;
cubeobj.prototype.numy = 0;
cubeobj.prototype.numz = 0;
cubeobj.prototype.tran = [];
cubeobj.prototype.mat = [];
cubeobj.prototype.changed = false;
cubeobj.prototype.vert = [];

var cube = [[[new cubeobj(1),new cubeobj(2),new cubeobj(3)],[new cubeobj(4),new cubeobj(5),new cubeobj(6)],[new cubeobj(7),new cubeobj(8),new cubeobj(9)]],
            [[new cubeobj(10),new cubeobj(11),new cubeobj(12)],[new cubeobj(13),new cubeobj(14),new cubeobj(15)],[new cubeobj(16),new cubeobj(17),new cubeobj(18)]],
            [[new cubeobj(19),new cubeobj(20),new cubeobj(21)],[new cubeobj(22),new cubeobj(23),new cubeobj(24)],[new cubeobj(25),new cubeobj(26),new cubeobj(27)]]]

var cubecheck = [[[new cubeobj(1),new cubeobj(2),new cubeobj(3)],[new cubeobj(4),new cubeobj(5),new cubeobj(6)],[new cubeobj(7),new cubeobj(8),new cubeobj(9)]],
           [[new cubeobj(10),new cubeobj(11),new cubeobj(12)],[new cubeobj(13),new cubeobj(14),new cubeobj(15)],[new cubeobj(16),new cubeobj(17),new cubeobj(18)]],
           [[new cubeobj(19),new cubeobj(20),new cubeobj(21)],[new cubeobj(22),new cubeobj(23),new cubeobj(24)],[new cubeobj(25),new cubeobj(26),new cubeobj(27)]]]



var translations =
                    [[-.31,.31,-.31],[-.31,.31,0],[-.31,.31,.31],

                    [0,.31,-.31],[0,.31,0],[0,.31,.31],

                    [.31,.31,-.31],[.31,.31,0],[.31,.31,.31],

                    [-.31,0,-.31],[-.31,0,0],[-.31,0,.31],

                    [0,0,-.31],[0,0,0],[0,0,.31],

                    [.31,0,-.31],[.31,0,0],[.31,0,.31],

                    [-.31,-.31,-.31],[-.31,-.31,0],[-.31,-.31,.31],

                    [0,-.31,-.31],[0,-.31,0],[0,-.31,.31],

                    [.31,-.31,-.31],[.31,-.31,0],[.31,-.31,.31]];

  var c =0;
  for (let i=0; i< 3; ++i){
    for(let j =0; j<3; ++j){
      for(let k = 0; k<3; ++k){
        cube[i][j][k].tran = translations[c];
        cube[i][j][k].mat = mat4();
        cubecheck[i][j][k].tran = translations[c];
        cubecheck[i][j][k].mat = mat4();
        c++;
      }
    }
  }

  var c =0;
  for (let i=0; i< 3; ++i){
    for(let j =0; j<3; ++j){
      for(let k = 0; k<3; ++k){
        colorCube(translations[c],i,j,k);
        initcheckCube(translations[c],i,j,k);
        c++;

      }
    }
  }



window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) {alert( "WebGL isn't available" ); }


    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );


    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var tranf = gl.getAttribLocation(program,"tranf");

    var t0 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,t0);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[0]),gl.STATIC_DRAW);
    gl.enableVertexAttribArray( tranf );
    gl.vertexAttribPointer(tranf,4,gl.FLOAT,false,0,0);

    var t1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,t1);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[1]),gl.STATIC_DRAW);
    gl.enableVertexAttribArray( tranf+1 );
    gl.vertexAttribPointer(tranf+1,4,gl.FLOAT,false,0,0);

    var t2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,t2);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[2]),gl.STATIC_DRAW);
    gl.enableVertexAttribArray( tranf+2 );
    gl.vertexAttribPointer(tranf+2,4,gl.FLOAT,false,0,0);

    var t3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,t3);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[3]),gl.STATIC_DRAW);
    gl.enableVertexAttribArray( tranf +3 );
    gl.vertexAttribPointer(tranf+3,4,gl.FLOAT,false,0,0);



    thetaLoc = gl.getUniformLocation(program, "theta");
    rotc = gl.getUniformLocation(program, "rotc");


    render();
}
function initcheckCube(Translations,i1,i2,i3){
  var vertices = [
      vec4( -0.15, -0.15,  0.15, 1.0 ),
      vec4( -0.15,  0.15,  0.15, 1.0 ),
      vec4(  0.15,  0.15,  0.15, 1.0 ),
      vec4(  0.15, -0.15,  0.15, 1.0 ),
      vec4( -0.15, -0.15, -0.15, 1.0 ),
      vec4( -0.15,  0.15, -0.15, 1.0 ),
      vec4(  0.15,  0.15, -0.15, 1.0 ),
      vec4(  0.15, -0.15, -0.15, 1.0 )
  ];
 //   for(let i = 0; i<8; ++i){
 //   vertices[i] = translate(Translations[0],Translations[1],Translations[2],vertices[i]);
 // }
      cubecheck[i1][i2][i3].vert = translate(Translations[0],Translations[1],Translations[2],vertices);
}

function colorCube(Translations,i1,i2,i3)
{
  var vertices2 = [];
  var vertices = [
      vec4( -0.15, -0.15,  0.15, 1.0 ),
      vec4( -0.15,  0.15,  0.15, 1.0 ),
      vec4(  0.15,  0.15,  0.15, 1.0 ),
      vec4(  0.15, -0.15,  0.15, 1.0 ),
      vec4( -0.15, -0.15, -0.15, 1.0 ),
      vec4( -0.15,  0.15, -0.15, 1.0 ),
      vec4(  0.15,  0.15, -0.15, 1.0 ),
      vec4(  0.15, -0.15, -0.15, 1.0 )
  ];
 //   for(let i = 0; i<8; ++i){
 //   vertices[i] = translate(Translations[0],Translations[1],Translations[2],vertices[i]);
 // }
cube[i1][i2][i3].vert = translate(Translations[0],Translations[1],Translations[2],vertices);
    var transformation = math.transpose(cube[i1][i2][i3].mat);
    quad( 1, 0, 3, 2, cube[i1][i2][i3].vert,[ 0.0, 0.0, 1.0, 1.0 ],transformation);
    quad( 2, 3, 7, 6, cube[i1][i2][i3].vert,[ 0.9, .9, .9, 1.0 ],transformation);
    quad( 3, 0, 4, 7, cube[i1][i2][i3].vert,[ 1.0, 1.0, 0.0, 1.0 ],transformation);
    quad( 6, 5, 1, 2, cube[i1][i2][i3].vert,[ 0.0, 0.5, 0.0, 1.0 ],transformation);
    quad( 4, 5, 6, 7, cube[i1][i2][i3].vert,[ 1.0, 0.65, 0.0, 1.0 ],transformation);
    quad( 5, 4, 0, 1, cube[i1][i2][i3].vert,[ 1.0, 0.0, 0.0, 1.0 ],transformation);
}

function quad(a, b, c, d,vertices,color = [],transformation)
{

    var vertexColors = [
      color,
      color,
      color,
      color,
      color,
      color,
      color,
      color
    ];


    var indices = [ a, b, c, a, c, d ];

    for ( var i = 0; i < indices.length; ++i ) {
        points.push( vertices[indices[i]] );

        colors.push(vertexColors[a]);
        for(let j=0; j<4; ++j){
          transform[j].push(transformation[j]);
        }

    }
}

function updateCube(i1,i2,i3){
  var transformation = cube[i1][i2][i3].mat;
  quad( 1, 0, 3, 2, cube[i1][i2][i3].vert,[ 0.0, 0.0, 1.0, 1.0 ],transformation);
  quad( 2, 3, 7, 6, cube[i1][i2][i3].vert,[ 0.9, .9, .9, 1.0 ],transformation);
  quad( 3, 0, 4, 7, cube[i1][i2][i3].vert,[ 1.0, 1.0, 0.0, 1.0 ],transformation);
  quad( 6, 5, 1, 2, cube[i1][i2][i3].vert,[ 0.0, 0.5, 0.0, 1.0 ],transformation);
  quad( 4, 5, 6, 7, cube[i1][i2][i3].vert,[ 1.0, 0.65, 0.0, 1.0 ],transformation);
  quad( 5, 4, 0, 1, cube[i1][i2][i3].vert,[ 1.0, 0.0, 0.0, 1.0 ],transformation);
}

function render()
{
  if(load.length!= 0){
    cubeChecked = 1;
    disable_all_buttons();
    buttonsdisable = 1;
    if(direcload[0]== "-"){
      var d = direcload[0] + direcload[1];
      var x = 2;
    }
    else {
      var d = direcload[0];
      var x = 1;
    }
    loader(parseInt(load[0]),parseInt(d),x);
    if(load.length == 0){
      cubeChecked = 0;
      buttonsdisable = 0;
      enable_all_buttons();
    }
  }
  else if(num!=0){
    cubeChecked = 1;
    buttonsdisable = 1;
    disable_all_buttons();
    randomize();
    if(num == 0){
      cubeChecked = 0;
      buttonsdisable = 0;
      enable_all_buttons();
    }
  }
  else{
    antime = 500;
  }
  if(cubeChecked == 0){
    if(check_cube()){
      alert("Congratulations you solved the cube!!");
    }
    //cubeChecked = 1;
  }

  var d = new Date();
  if(rotationtop == 1){
    if(d.getTime()-startan >= antime){
      rotationtop = 0;
      horizontal_right_rotation(0,rotationtop,direc);
      if(direc >0){
      horizontal_right_transform(0);
      }
    else{
      horizontal_left_transform(0);
    }
      save += "0";
      direcsave += direc;
      cubeChecked = 0;
      enable_all_buttons();
    }
    else{
      cubeYRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
      horizontal_right_rotation(0,rotationtop,direc);
    }

  }
  if(rotationbot == 1){
    if(d.getTime()-startan >= antime){
      rotationbot =0;
      horizontal_right_rotation(2,rotationbot,direc);
      if(direc >0){
        horizontal_right_transform(2);
      }
      else{
        horizontal_left_transform(2);
      }
      save += "1";
      direcsave += direc;
      cubeChecked = 0;
      enable_all_buttons();
    }
    else{
    cubeYRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
    horizontal_right_rotation(2,rotationbot,direc);
    }

  }
  if(rotationmid_h == 1){
    if(d.getTime()-startan >= antime){

      rotationmid_h =0;
      enable_all_buttons()

    }
    else{
    cubeYRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
    }
    horizontal_right_rotation(1, rotationmid_h,direc);
    if(rotationmid_h == 0){
      cubeYRotation = Math.PI/2;
      horizontal_right_rotation(1, rotationmid_h,-1*direc);
      horizontal_right_rotation(2, rotationmid_h,-1*direc);
      horizontal_right_rotation(0, rotationmid_h,-1*direc);
      camtran = camrotateY(direc*cubeYRotation,camtran);
      if(direc <0){
        horizontal_right_transform(0);
        horizontal_right_transform(2);
        //horizontal_right_transform(1);
      }
      else{
        //horizontal_left_transform(1);
        horizontal_left_transform(0);
        horizontal_left_transform(2);
      }
      save += "2";
      direcsave += direc;
      cubeChecked = 0;

    }
  }
  if(rotationfront == 1){
    if(d.getTime()-startan >= antime){
      rotationfront = 0;
      rotate_left(2, rotationfront,direc);
      if(direc > 0){
        transform_left(2);
      }
      else{
        transform_right(2);
      }
      save += "3";
      direcsave +=direc;
      cubeChecked = 0;
      enable_all_buttons();
    }
    else{
      cubeZRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
      rotate_left(2, rotationfront,direc);
    }

  }
  if(rotationmiddle == 1){
    if(d.getTime()-startan >= antime){
      rotationmiddle = 0;
      enable_all_buttons();
    }
    else{
      cubeZRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
    }
    rotate_left(1, rotationmiddle,direc);
    if(rotationmiddle == 0){
      cubeZRotation = Math.PI/2;

      rotate_left(1, rotationmiddle,-1*direc);
      rotate_left(2, rotationmiddle,-1*direc);
      rotate_left(0, rotationmiddle,-1*direc);
      camtran = camrotateZ(direc*cubeZRotation,camtran);
      if(direc < 0){
        transform_left(0);
        transform_left(2);
        //horizontal_right_transform(1);
      }
      else{
        //horizontal_left_transform(1);
        transform_right(0);
        transform_right(2);
      }
      save += "4";
      direcsave += direc;
      cubeChecked = 0;

    }
  }
  if(rotationback == 1){
    if(d.getTime()-startan >= antime){
      rotationback = 0;
      rotate_left(0, rotationback,direc);
      if(direc > 0){
        transform_left(0);
      }
      else{
        transform_right(0);
      }
      save += "5";
      direcsave += direc;
      cubeChecked = 0;
      enable_all_buttons()
    }
    else{
      cubeZRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
      rotate_left(0, rotationback,direc);

    }

  }
  if(rotationleft == 1){
    if(d.getTime()-startan >= antime){
      rotationleft = 0;
      rotate_forward(0, rotationleft,direc);
      if(direc > 0){
        transform_back(0);
      }
      else{
        transform_for(0);
      }
      save += "6";
      direcsave += direc;
      cubeChecked = 0;
      enable_all_buttons()
    }
    else{
      cubeXRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
      rotate_forward(0, rotationleft,direc);
    }

  }
  if(rotationmid_v == 1){
    if(d.getTime()-startan >= antime){
      rotationmid_v = 0;
      enable_all_buttons()
    }
    else{
      cubeXRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
    }
    rotate_forward(1, rotationmid_v,direc);
    if(rotationmid_v == 0){
      cubeXRotation = Math.PI/2;

      rotate_forward(1, rotationmid_v,-1*direc);
      rotate_forward(2, rotationmid_v,-1*direc);
      rotate_forward(0, rotationmid_v,-1*direc);
      camtran = camrotateX(direc*cubeXRotation,camtran);
      if(direc < 0){
        transform_back(0);
        transform_back(2);
        //horizontal_right_transform(1);
      }
      else{
        //horizontal_left_transform(1);
        transform_for(0);
        transform_for(2);
      }
      save += "8";
      direcsave += direc;
      cubeChecked = 0;
  }
}
  if(rotationright == 1){
    if(d.getTime()-startan >= antime){
      rotationright = 0;
      rotate_forward(2, rotationright,direc);
      if(direc > 0){
        transform_back(2);
      }
      else{
        transform_for(2);
      }
      save += "7";
      direcsave += direc;
      cubeChecked = 0;
      enable_all_buttons();
    }
    else{
      cubeXRotation = ((d.getTime()-startan)/antime)*(Math.PI/2);
      rotate_forward(2, rotationright,direc);
    }

  }

  points = [];
  colors = [];
  transform = [[],[],[],[]];
  for (let i=0; i< 3; ++i){
    for(let j =0; j<3; ++j){
      for(let k = 0; k<3; ++k){
        updateCube(i,j,k);
      }
    }
  }
  //gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  var vBuffer = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
  gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );


  var vPosition = gl.getAttribLocation( program, "vPosition" );
  gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
  gl.enableVertexAttribArray( vPosition );

  var tranf = gl.getAttribLocation(program,"tranf");

  var t0 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,t0);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[0]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray( tranf );
  gl.vertexAttribPointer(tranf,4,gl.FLOAT,false,0,0);

  var t1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,t1);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[1]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray( tranf+1 );
  gl.vertexAttribPointer(tranf+1,4,gl.FLOAT,false,0,0);

  var t2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,t2);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[2]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray( tranf+2);
  gl.vertexAttribPointer(tranf+2,4,gl.FLOAT,false,0,0);

  var t3 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,t3);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(transform[3]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray( tranf +3 );
  gl.vertexAttribPointer(tranf+3,4,gl.FLOAT,false,0,0);
  //gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    theta[0]+= xrot;
    theta[1]+= yrot;
    theta[2]+= zrot;

    gl.uniformMatrix4fv(rotc,false,flatten(camtran));
    gl.uniform3fv(thetaLoc, theta);
    gl.drawArrays( gl.TRIANGLES, 0, NumVertices );

    requestAnimFrame( render );
}
