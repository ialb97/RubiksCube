//I/O controller functions

function check_cube(){
  var dontcheck = [22,17,15,13,11,5];
  cubeChecked = 1;
  for (let i=0; i< 3; ++i){
    for(let j =0; j<3; ++j){
      for(let k = 0; k<3; ++k){
        if(cube[i][j][k].index!=cubecheck[i][j][k].index){
          return false;
        }
        if(cube[i][j][k].index != dontcheck[0]){
          if(!math.equal(cube[i][j][k].mat,cubecheck[i][j][k].mat)){
            return false;
          }
        }
        else{
          dontcheck.pop();
        }

      }
    }
  }

  return true;
}

function disable_all_buttons(){
  var buttons = document.getElementsByTagName("button");
  for(let i=0; i<buttons.length; ++i){
    buttons[i].disabled = true;
  }
};

function enable_all_buttons(){
  if(buttonsdisable == 0){
    var buttons = document.getElementsByTagName("button");
    for(let i=0; i<buttons.length; ++i){
      buttons[i].disabled = false;
    }
  }
};
async function randomize(){
  var choices = [-1,1];
  direc = choices[Math.floor(Math.random()*2)];
  antime = 10;
    if(rotationtop + rotationbot + rotationmid_h + rotationfront + rotationmiddle + rotationback + rotationleft + rotationright + rotationmid_v == 0){
      switch (Math.floor(Math.random() * 9)) {
        case 0:
          rotationtop = 1;
          break;
        case 1:
          rotationbot = 1;
          break;
        case 2:
          rotationmid_h = 1;
          break;
        case 3:
          rotationfront = 1;
          break;
        case 4:
          rotationmiddle = 1;
          break;
        case 5:
          rotationback = 1;
          break;
        case 6:
          rotationleft = 1;
          break;
        case 7:
          rotationright = 1;
          break;
        case 8:
          rotationmid_v = 1;
          break;
      }
      num--;
      disable_all_buttons();
    }
  }
async function loader(move, direction,neg){
  antime = 10;
  direc = direction;
      if(rotationtop + rotationbot + rotationmid_h + rotationfront + rotationmiddle + rotationback + rotationleft + rotationright + rotationmid_v == 0){
        switch (move) {
          case 0:
            rotationtop = 1;
            break;
          case 1:
            rotationbot = 1;
            break;
          case 2:
            rotationmid_h = 1;
            break;
          case 3:
            rotationfront = 1;
            break;
          case 4:
            rotationmiddle = 1;
            break;
          case 5:
            rotationback = 1;
            break;
          case 6:
            rotationleft = 1;
            break;
          case 7:
            rotationright = 1;
            break;
          case 8:
            rotationmid_v = 1;
            break;
        }
        direcload = direcload.substring(neg,direcload.end);
        load = load.substring(1,load.end);
        disable_all_buttons();
      }

    }


  function download(data, filename, type) {
      var file = new Blob([data], {type: type});
      if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
          var a = document.createElement("a"),
                  url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
          }, 0);
      }
  }


function loadfile() {
  var loadedstring = "";
    var file = document.getElementById('infile');


    var f = file.files[0];
    if(file.files[0] == null){
      enable_all_buttons();
    }
    var textType = /text.*/;

    if (f.type.match(textType)) {
        var r = new FileReader();
        r.onload = function(e) {
          var c =0;
          for (let i=0; i< 3; ++i){
            for(let j =0; j<3; ++j){
              for(let k = 0; k<3; ++k){
                cube[i][j][k].tran = translations[c];
                cube[i][j][k].mat = mat4();
                c++;
              }
            }
          }

          var c =0;
          for (let i=0; i< 3; ++i){
            for(let j =0; j<3; ++j){
              for(let k = 0; k<3; ++k){
                colorCube(translations[c],i,j,k);
                c++;

              }
            }
          }
            loadedstring = r.result;
            split(loadedstring);
            save = "";
            direcsave = "";
          }
        r.readAsText(f);
      }
    else {
        alert("File not supported!");
    }
}

function split(loadedstring){
  var temptheta = "";
  var d = 0;
  var q = 0;
  for(let i =0; i<loadedstring.length; ++i){
    if(loadedstring[i]=="\n"){
      d++;
      i++;
    }
    if(d == 0){
      load += loadedstring[i];
    }
    else if(d==1){
      direcload += loadedstring[i];
    }
    else if(d==2){
      if(loadedstring[i] != " "){
        temptheta += loadedstring[i];
      }
      else{
        theta[q] = parseInt(temptheta);
        q++;
        temptheta = "";
      }

    }
  }
}
