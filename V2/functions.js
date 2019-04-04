//functions for rotaion and transformation

async function horizontal_right_rotation(option,selection,dir=1){
  for(let i =0; i< 3; ++i){
    for(let j=0; j<3; ++j){
      if(selection ==0){
        cubeYRotation = Math.PI/2 - cube[option][i][j].yrot;
        cube[option][i][j].mat = rotateY(dir*cubeYRotation,cube[option][i][j].mat);
        cube[option][i][j].yrot = 0;
      }
      else{
      cube[option][i][j].mat = rotateY(dir*(cubeYRotation-cube[option][i][j].yrot),cube[option][i][j].mat);
      cube[option][i][j].yrot = cubeYRotation;
    }

    }
  }
}

async function rotate_left(option, selection,dir=1){
  for(let i =0; i< 3; ++i){
    for(let j=0; j<3; ++j){
      if(selection ==0){
        cubeZRotation = Math.PI/2 - cube[i][j][option].zrot;
        cube[i][j][option].mat = rotateZ(dir*cubeZRotation,cube[i][j][option].mat);
        cube[i][j][option].zrot = 0;
      }
      else{
      cube[i][j][option].mat = rotateZ(dir*(cubeZRotation-cube[i][j][option].zrot),cube[i][j][option].mat);
      cube[i][j][option].zrot = cubeZRotation;
    }

    }
  }

}

async function rotate_forward(option, selection, dir=-1){
  for(let i =0; i< 3; ++i){
    for(let j=0; j<3; ++j){
      if(selection ==0){
        cubeXRotation = Math.PI/2 - cube[i][option][j].xrot;
        cube[i][option][j].mat = rotateX(dir*cubeXRotation,cube[i][option][j].mat);
        cube[i][option][j].xrot = 0;
      }
      else{
      cube[i][option][j].mat = rotateX(dir*(cubeXRotation-cube[i][option][j].xrot),cube[i][option][j].mat);
      cube[i][option][j].xrot = cubeXRotation;
    }

    }
  }

}

async function horizontal_left_transform(option){
  var arr1 = [cube[option][0][2],cube[option][1][2],cube[option][2][2]];
  var arr2 = [cube[option][0][1],cube[option][1][1],cube[option][2][1]];
  var arr3 = [cube[option][0][0],cube[option][1][0],cube[option][2][0]];

  cube[option][0] = arr1;
  cube[option][1] = arr2;
  cube[option][2] = arr3;

}

async function horizontal_right_transform(option){
  var arr1 = [cube[option][2][0],cube[option][1][0],cube[option][0][0]];
  var arr2 = [cube[option][2][1],cube[option][1][1],cube[option][0][1]];
  var arr3 = [cube[option][2][2],cube[option][1][2],cube[option][0][2]];

  cube[option][0] = arr1;
  cube[option][1] = arr2;
  cube[option][2] = arr3;

}
async function transform_left(option){
  var ap = cube[0][2][option];
  var bp = cube[1][2][option];
  var cp = cube[2][2][option];
  var dp = cube[0][1][option];
  var ep = cube[1][1][option];
  var fp = cube[2][1][option];
  var gp = cube[0][0][option];
  var hp = cube[1][0][option];
  var ip = cube[2][0][option];

  cube[0][0][option] = ap;
  cube[0][1][option] = bp;
  cube[0][2][option] = cp;
  cube[1][0][option] = dp;
  cube[1][1][option] = ep;
  cube[1][2][option] = fp;
  cube[2][0][option] = gp;
  cube[2][1][option] = hp;
  cube[2][2][option] = ip;

}
async function transform_right(option){
  var ap = cube[2][0][option];
  var bp = cube[1][0][option];
  var cp = cube[0][0][option];
  var dp = cube[2][1][option];
  var ep = cube[1][1][option];
  var fp = cube[0][1][option];
  var gp = cube[2][2][option];
  var hp = cube[1][2][option];
  var ip = cube[0][2][option];

  cube[0][0][option] = ap;
  cube[0][1][option] = bp;
  cube[0][2][option] = cp;
  cube[1][0][option] = dp;
  cube[1][1][option] = ep;
  cube[1][2][option] = fp;
  cube[2][0][option] = gp;
  cube[2][1][option] = hp;
  cube[2][2][option] = ip;

}

async function transform_for(option){
  var ap = cube[2][option][2];
  var bp = cube[1][option][2];
  var cp = cube[0][option][2];
  var dp = cube[2][option][1];
  var ep = cube[1][option][1];
  var fp = cube[0][option][1];
  var gp = cube[2][option][0];
  var hp = cube[1][option][0];
  var ip = cube[0][option][0];

  cube[0][option][2] = ap;
  cube[0][option][1] = bp;
  cube[0][option][0] = cp;
  cube[1][option][2] = dp;
  cube[1][option][1] = ep;
  cube[1][option][0] = fp;
  cube[2][option][2] = gp;
  cube[2][option][1] = hp;
  cube[2][option][0] = ip;
}
async function transform_back(option){
  var ap = cube[0][option][0];
  var bp = cube[1][option][0];
  var cp = cube[2][option][0];
  var dp = cube[0][option][1];
  var ep = cube[1][option][1];
  var fp = cube[2][option][1];
  var gp = cube[0][option][2];
  var hp = cube[1][option][2];
  var ip = cube[2][option][2];

  cube[0][option][2] = ap;
  cube[0][option][1] = bp;
  cube[0][option][0] = cp;
  cube[1][option][2] = dp;
  cube[1][option][1] = ep;
  cube[1][option][0] = fp;
  cube[2][option][2] = gp;
  cube[2][option][1] = hp;
  cube[2][option][0] = ip;
}
