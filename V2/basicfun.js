//basic functions


function translate(Tx,Ty,Tz,vert){
  tran = math.matrix([vec4(1,0,0,Tx),
          vec4(0,1,0,Ty),
          vec4(0,0,1,Tz),
          vec4(0,0,0,1)]);
 vert = math.matrix(vert);
 vert = math.transpose(vert);
 translatedverts = math.multiply(tran,vert);
 //console.log(translatedverts._data);
 return math.transpose(translatedverts)._data;
}

function rotateX(angle,vert) {
  Rx = math.matrix([vec4(1,0,0,0),
                    vec4(0,Math.cos(angle),-1*Math.sin(angle),0),
                    vec4(0,Math.sin(angle),Math.cos(angle),0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
xrotatedverts = math.multiply(Rx,vert);
return math.transpose(xrotatedverts)._data;

}

function rotateY(angle,vert) {
  Ry = math.matrix([vec4(Math.cos(angle),0,Math.sin(angle),0),
                    vec4(0,1,0,0),
                    vec4(-1*Math.sin(angle),0,Math.cos(angle),0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
yrotatedverts = math.multiply(Ry,vert);
//console.log(yrotatedverts._data);
return math.transpose(yrotatedverts)._data;

}

function rotateZ(angle,vert) {
  Rz = math.matrix([vec4(Math.cos(angle),-1*Math.sin(angle),0,0),
                    vec4(Math.sin(angle),Math.cos(angle),0,0),
                    vec4(0,0,1,0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
zrotatedverts = math.multiply(Rz,vert);
return math.transpose(zrotatedverts)._data;

}

function camrotateX(angle,vert) {
  Rx = math.matrix([vec4(1,0,0,0),
                    vec4(0,Math.cos(angle),-1*Math.sin(angle),0),
                    vec4(0,Math.sin(angle),Math.cos(angle),0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
xrotatedverts = math.multiply(vert,Rx);
return math.transpose(xrotatedverts)._data;

}

function camrotateY(angle,vert) {
  Ry = math.matrix([vec4(Math.cos(angle),0,Math.sin(angle),0),
                    vec4(0,1,0,0),
                    vec4(-1*Math.sin(angle),0,Math.cos(angle),0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
yrotatedverts = math.multiply(vert,Ry);
//console.log(yrotatedverts._data);
return math.transpose(yrotatedverts)._data;

}

function camrotateZ(angle,vert) {
  Rz = math.matrix([vec4(Math.cos(angle),-1*Math.sin(angle),0,0),
                    vec4(Math.sin(angle),Math.cos(angle),0,0),
                    vec4(0,0,1,0),
                    vec4(0,0,0,1)
                  ]);
vert = math.matrix(vert);
vert = math.transpose(vert);
zrotatedverts = math.multiply(vert,Rz);
return math.transpose(zrotatedverts)._data;

}
