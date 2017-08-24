/**
 * Created by shashwat on 14/08/17.
 */
import {Curve} from './curve';
var getMousePos = function (_canvas, evt) {
  var rect = _canvas.getBoundingClientRect();
  return {
    x: ((evt.clientX - rect.left) / (rect.right - rect.left) * _canvas.width),
    y: ((evt.clientY - rect.top) / (rect.bottom - rect.top) * _canvas.height)
  };
};

var mouseXY = function (evt, canvas, curve) {
  var pos = getMousePos(canvas, evt);
  var path = curve.path();

  if (canvas.getContext && curve.follower()) {
    var cp = curve.currentPath();
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';

    let k: string;
    // draw all the complete curves
    for (k in path) {
      if (k == cp)
        continue;
      ctx.beginPath();
      ctx.moveTo(path[k][0][0], path[k][0][1]);
      for (var i = 0; i < path[k].length; i++) {
        ctx.lineTo(path[k][i][0], path[k][i][1]);
      }
      ctx.lineTo(path[k][0][0], path[k][0][1]);
      ctx.stroke();
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
    }

    // draw current path points
    ctx.beginPath();
    ctx.fillStyle = 'red';
    for (var i = 0; i < path[cp].length; i++) {
      ctx.fillRect(path[cp][i][0] - 2, path[cp][i][1] - 2, 4, 4);
    }
    ctx.closePath();

    // line following the mouse movement
    ctx.beginPath();
    ctx.moveTo(path[cp][0][0], path[cp][0][1]);
    for (var i = 0; i < path[cp].length; i++) {
      ctx.lineTo(path[cp][i][0], path[cp][i][1]);
    }
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.restore();
  }
};

var mouseDown = function (evt, canvas, curve) {
  if (evt.buttons == 1) {
    curve.setFollower(true);
    var pos = getMousePos(canvas, evt);
    curve.append([pos.x, pos.y]);

    // draw current point
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      // ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(pos[0] - 2, pos[1] - 2, 4, 4);
      // ctx.closePath();
      // ctx.restore();
    }
  } else if (evt.buttons == 2) {
    curve.setFollower(false);
    curve.setCurrentPath(curve.currentPath() + 1);
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var path = curve.path();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'blue';

      // draw all the curves
      let k: string;
      for (k in path) {
        ctx.beginPath();
        ctx.moveTo(path[k][0][0], path[k][0][1]);
        for (var i = 0; i < path[k].length; i++) {
          ctx.lineTo(path[k][i][0], path[k][i][1]);
        }
        ctx.lineTo(path[k][0][0], path[k][0][1]);
        ctx.stroke();
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();

        // draw all the curve points
        ctx.beginPath();
        ctx.fillStyle = 'red';
        for (var i = 0; i < path[k].length; i++) {
          ctx.fillRect(path[k][i][0] - 2, path[k][i][1] - 2, 4, 4);
        }
        ctx.closePath();
      }
    }
  }
};

// TODO: Remove this after 2 months. Today: 24/8
function drawImage(image_src: string, ctx, height, width) {
  let image = new Image();
  image.src = image_src;
  window.onload = function () {
    ctx.drawImage(image, 0, 0, width, height);
  };
}

function createCanvas(width: number, height: number) {
  var canvas = document.createElement('canvas');
  canvas.id = 'img_canvas';
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = 'absolute';
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.height = "100%";
  canvas.style.width = "100%";
  return canvas;
}

export function removeCanvas(){
  let img_div = <HTMLElement>document.getElementById('img_div');
  if (document.getElementById('img_canvas')) {
    let existing_canvas = document.getElementById('img_canvas');
    img_div.removeChild(existing_canvas);
  }
  return;
}

export function clearCanvasX(){
  let canvas = <HTMLCanvasElement>document.getElementById('img_canvas');
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

export var drawCanvas = function () {
  let img_div = <HTMLElement>document.getElementById('img_div');
  var width = img_div.offsetWidth;
  var height = img_div.offsetHeight;
  img_div.style.position = "relative";
  var canvas = createCanvas(width, height);

  // redraw canvas
  if (document.getElementById('img_canvas')) {
    let existing_canvas = document.getElementById('img_canvas');
    img_div.removeChild(existing_canvas);
  }
  img_div.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  ctx.globalAlpha = 0.5;
  var curve = new Curve();
  curve.setCanvas(canvas);

  canvas.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    document.addEventListener('contextmenu', event => event.preventDefault(), false);
    mouseDown(evt, this, curve);
  }, false);

  canvas.addEventListener("mousemove", function (evt) {
    mouseXY(evt, this, curve);
  }, false);
  return curve;
};

//https://jsfiddle.net/z2ngg62k/8/
