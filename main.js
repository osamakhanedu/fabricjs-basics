//   Naive canvas API:
// const canvasEl = document.getElementById("canvas");
// const ctx = canvasEl.getContext("2d");

// // set fill color of context
// ctx.fillStyle = "red";
// // create rectangle at a 100,100 point, with 20x20 dimensions
// ctx.translate(100, 100);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.fillRect(-10, -10, 20, 20);

//  Fabric canvas API:
var canvas = new fabric.Canvas("canvas");

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "red",
  width: 20,
  height: 20,
  angle: 45,
});

// "add" rectangle onto canvas
canvas.add(rect);
