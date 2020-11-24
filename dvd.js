var dvd = {};

var DEBUG = true;

if(typeof nw == "undefined") nw = false;

if(DEBUG && nw) {
  nw.Window.get().showDevTools();
}

dvd.paused = false;
dvd.das = false;

window.onkeydown = function(e) {
  if(!dvd.das) {
    if(e.keyCode === 32) {
      console.log("setting das");
      dvd.das = true;
      if(dvd.paused) {
        dvd.unpause();
      } else {
        dvd.pause();
      }
    }
  }
}

window.onkeyup = function(e) {
  if(e.keyCode === 32) {
    console.log("releasing das");
    dvd.das = false;
  }
}

dvd.unpause = function() {
  if(dvd.paused) {
    dvd.paused = false;
    dvd.interval = window.setInterval(dvd.update, (1000/60));
  }
}

dvd.pause = function() {
  if(!dvd.paused) {
    dvd.paused = true;
    window.clearInterval(dvd.interval);
  }
}

dvd.init = function() {
  dvd.box = document.getElementById("dvd");
  dvd.stylePrefix = "fill:rgb("
  dvd.styleString = ");opacity:1;fill-opacity:1;stroke:none;stroke-width:0.64099997;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:19.13399887;stroke-opacity:1"
  dvd.color = new Color;
  dvd.updateColor();
  dvd.x = 1280/2;
  dvd.y = 720/2;
  dvd.w = 50;
  dvd.h = 50;
  dvd.cw = dvd.w/2;
  dvd.ch = dvd.h/2;

  var directions = [ -1, 1 ];
  dvd.dx = directions[Math.floor(Math.random() * 2)];
  dvd.dy = directions[Math.floor(Math.random() * 2)];

  dvd.interval = window.setInterval(dvd.update, (1000/60));
}

dvd.updateColor = function() {

  dvd.colorString = "" + dvd.color.red + "," + dvd.color.green + "," + dvd.color.blue;
  dvd.box.setAttribute("style",
    dvd.stylePrefix + dvd.colorString + dvd.styleString);
}

dvd.update = function() {
  if(dvd.x <= dvd.cw ) {
    console.log("bounce left");
    dvd.dx = 1;
    dvd.bounce();
  } else if(dvd.x >= 1280 - dvd.cw) {
    console.log("bounce right");
    dvd.dx = -1;
    dvd.bounce();
  }
  
  if(dvd.y <= dvd.ch) {
    console.log("bounce top");
    dvd.dy = 1;
    dvd.bounce();
  } else if(dvd.y >= 720 - dvd.ch) {
    console.log("bounce bottom");
    dvd.dy = -1;
    dvd.bounce();
  }
  
  dvd.x += dvd.dx;
  dvd.y += dvd.dy;
  dvd.setXY(dvd.x,dvd.y);
  
  if(dvd.paused) {
    window.clearInterval(dvd.interval);
  }
}

dvd.bounce = function() {
  dvd.color.randomize();
  dvd.updateColor();
}
dvd.setXY = function(x,y) {
  true_x = x - (dvd.w/2);
  true_y = y - (dvd.h/2);
  
  dvd.x = x;
  dvd.y = y;
  
  dvd.box.setAttribute("x",true_x);
  dvd.box.setAttribute("y",true_y);
}

class Color {
  constructor() {
    this.rgb = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ];
  }
  
  get red() {
    return this.rgb[0];
  }
  
  get green() {
    return this.rgb[1];
  }

  get blue() {
    return this.rgb[2];
  }
  
  get values() {
    return "" + this.red + "," + this.green + "," + this.blue;
  }
  
  randomize() {
    var rgb = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]
    
    for(var i = 0; i < rgb.length; i++) {
      if(rgb[i] === this.rgb[i]) {
        rgb[i] = 255 - rgb[i];
      }
    }
    
    this.rgb = rgb;
  }
}