document.getElementById( "toprButton" ).onclick = function () {
        disable_all_buttons();
        rotationtop = 1;
        rotationbot = 0;
        rotationmid_h = 0;
        direc =1;
        var d = new Date();
        startan = d.getTime();
    };
document.getElementById( "botrButton" ).onclick = function () {
        disable_all_buttons();
        rotationbot = 1;
        rotationtop = 0;
        rotationmid_h = 0;
        direc =1;
        var d = new Date();
        startan = d.getTime();
    };
document.getElementById( "hmidrButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 1;
    rotationtop = 0;
    rotationbot = 0;
    direc =1;
    var d = new Date();
    startan = d.getTime();
    };
document.getElementById( "toplButton" ).onclick = function () {
            disable_all_buttons();
            rotationtop = 1;
            rotationbot = 0;
            rotationmid_h = 0;
            direc= -1;
            var d = new Date();
            startan = d.getTime();
        };
document.getElementById( "botlButton" ).onclick = function () {
            disable_all_buttons();
            rotationbot = 1;
            rotationtop = 0;
            rotationmid_h = 0;
            direc = -1;
            var d = new Date();
            startan = d.getTime();
        };
document.getElementById( "hmidlButton" ).onclick = function () {
        disable_all_buttons();
        rotationmid_h = 1;
        rotationtop = 0;
        rotationbot = 0;
        direc = -1;
        var d = new Date();
        startan = d.getTime();
        };
document.getElementById( "frontrButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 1;
    rotationmiddle = 0;
    rotationback = 0;
    direc = 1;
    var d = new Date();
    startan = d.getTime();
    };
document.getElementById( "middlerButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationback = 0;
    rotationmiddle = 1;
    direc = 1;
    var d = new Date();
    startan = d.getTime();
    };
document.getElementById("backrButton").onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationmiddle = 0;
    rotationback = 1;
    var d = new Date();
    startan = d.getTime();
    direc = 1
    };
document.getElementById( "frontlButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 1;
    rotationmiddle = 0;
    rotationback = 0;
    direc = -1;
    var d = new Date();
    startan = d.getTime();
    };
document.getElementById( "middlelButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationback = 0;
    rotationmiddle = 1;
    direc = -1;
    var d = new Date();
    startan = d.getTime();
    };
document.getElementById("backlButton").onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationmiddle = 0;
    rotationback = 1;
    var d = new Date();
    startan = d.getTime();
    direc = -1
    };
document.getElementById( "rightrButton" ).onclick = function () {
  disable_all_buttons();
  rotationmid_h = 0;
  rotationtop = 0;
  rotationbot = 0;
  rotationfront = 0;
  rotationmiddle = 0;
  rotationback = 0;
  rotationright = 1
  var d = new Date();
  startan = d.getTime();
  direc = -1;
  };
document.getElementById( "vmidrButton" ).onclick = function () {
  disable_all_buttons();
  rotationmid_h = 0;
  rotationtop = 0;
  rotationbot = 0;
  rotationfront = 0;
  rotationback = 0;
  rotationmiddle = 0;
  rotationmid_v = 1
  var d = new Date();
  startan = d.getTime();
  direc = -1;
  };
document.getElementById("leftrButton").onclick = function () {
  disable_all_buttons();
  rotationmid_h = 0;
  rotationtop = 0;
  rotationbot = 0;
  rotationfront = 0;
  rotationmiddle = 0;
  rotationback = 0;
  rotationleft = 1;
  var d = new Date();
  startan = d.getTime();
  direc = -1;
  };
  document.getElementById( "rightlButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationmiddle = 0;
    rotationback = 0;
    rotationright = 1
    var d = new Date();
    startan = d.getTime();
    direc = 1;
    };
  document.getElementById( "vmidlButton" ).onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationback = 0;
    rotationmiddle = 0;
    rotationmid_v = 1
    var d = new Date();
    startan = d.getTime();
    direc = 1;
    };
  document.getElementById("leftlButton").onclick = function () {
    disable_all_buttons();
    rotationmid_h = 0;
    rotationtop = 0;
    rotationbot = 0;
    rotationfront = 0;
    rotationmiddle = 0;
    rotationback = 0;
    rotationleft = 1;
    var d = new Date();
    startan = d.getTime();
    direc = 1;
    };
  document.getElementById("X").onclick = function () {
    //disable_all_buttons();
    if(xrot == 0){
      xrot = 2;
    }
    else{
      xrot = 0;
    }

    };
document.getElementById("Y").onclick = function () {
    //  disable_all_buttons();
    if(yrot == 0){
      yrot = 2;
    }
    else{
      yrot = 0;
    }
  };
document.getElementById("Z").onclick = function () {
  //disable_all_buttons();
  if(zrot == 0){
    zrot = 2;
  }
  else{
    zrot = 0;
  }
  };
document.getElementById("_X").onclick = function () {
  //disable_all_buttons();
  if(xrot == 0){
    xrot = -2;
  }
  else{
    xrot = 0;
  }

  };
document.getElementById("_Y").onclick = function () {
  //  disable_all_buttons();
  if(yrot == 0){
    yrot = -2;
  }
  else{
    yrot = 0;
  }
};
document.getElementById("_Z").onclick = function () {
//disable_all_buttons();
if(zrot == 0){
  zrot = -2;
}
else{
  zrot = 0;
}
};
document.getElementById("randomize").onclick = function () {
//disable_all_buttons();
num = document.getElementById("numrotations").value;
if(num == ''){
  num = 0;
}
};
document.getElementById("save").onclick = function () {
  var filename = "CUBESAVE";
  var angles = "\n" +theta[0]+ " " + theta[1] + " " + theta[2] + " ";

  download(save + "\n" + direcsave + angles, filename, String);
};
document.getElementById("load").onclick = function () {
  disable_all_buttons();
  loadfile();
};
document.getElementById("resetrot").onclick = function () {
  theta[0] = 25;
  theta[1] = 3;
  theta[2] = 0;
};
