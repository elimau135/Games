var cols = 3;
var rows = 3;
var blockSize = 250;
var lineWidth = 2; // Width of the white lines separating blocks
var canvasWidth = cols * blockSize;
var canvasHeight = rows * blockSize;
var context;
var board = document.getElementById("board");

window.onload = function () {
  board = document.getElementById("board");
  board.height = canvasHeight;
  board.width = canvasWidth;
  context = board.getContext("2d");

  fieldRed();
  fieldGreen();
  update();
};

function update() {
  context.fillStyle = "white";
  context.fillRect(0, 0, board.width, board.height);

  // Draw blocks with white lines
  context.strokeStyle = "white";
  context.lineWidth = lineWidth;
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      context.fillStyle = "black";
      context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
      context.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);
    }
  }
}

function fieldGreen() {
  board.addEventListener("click", function letsHover(e) {
    var x = e.clientX;
    var y = e.clientY;

    console.log("x: " + x + " y: " + y);
    if (81 < y && y <= 331 && 593 <= x && x < 843) {
      context.fillStyle = "green";
      context.fillRect(0, 0, blockSize, blockSize);
      fieldRed();
    } else if (331 < y && y <= 581 && 593 <= x && x < 843) {
      context.fillStyle = "green";
      context.fillRect(0, 250, blockSize, blockSize);
      fieldRed();
    } else if (581 < y && y <= 831 && 593 <= x && x < 843) {
      context.fillStyle = "green";
      context.fillRect(0, 500, blockSize, blockSize);
      fieldRed();
    } else if (81 < y && y <= 331 && 843 <= x && x < 1093) {
      context.fillStyle = "green";
      context.fillRect(250, 0, blockSize, blockSize);
      fieldRed();
    } else if (331 < y && y <= 581 && 843 <= x && x < 1093) {
      context.fillStyle = "green";
      context.fillRect(250, 250, blockSize, blockSize);
      fieldRed();
    } else if (581 < y && y <= 831 && 843 <= x && x < 1093) {
      context.fillStyle = "green";
      context.fillRect(250, 500, blockSize, blockSize);
      fieldRed();
    } else if (81 < y && y <= 331 && 1093 <= x && x < 1341) {
      context.fillStyle = "green";
      context.fillRect(500, 0, blockSize, blockSize);
      fieldRed();
    } else if (331 < y && y <= 581 && 1093 <= x && x < 1341) {
      context.fillStyle = "green";
      context.fillRect(500, 250, blockSize, blockSize);
      fieldRed();
    } else if (581 < y && y <= 831 && 1093 <= x && x < 1341) {
      context.fillStyle = "green";
      context.fillRect(500, 500, blockSize, blockSize);
      fieldRed();
    }
  });
}

function fieldRed() {
  board.addEventListener("click", function letsHover(e) {
    var x = e.clientX;
    var y = e.clientY;

    console.log("x: " + x + " y: " + y);

    if (81 < y && y <= 331 && 593 <= x && x < 843) {
      context.fillStyle = "red";
      context.fillRect(0, 0, blockSize, blockSize);
      fieldGreen();
    } else if (331 < y && y <= 581 && 593 <= x && x < 843) {
      context.fillStyle = "red";
      context.fillRect(0, 250, blockSize, blockSize);
      fieldGreen();
    } else if (581 < y && y <= 831 && 593 <= x && x < 843) {
      context.fillStyle = "red";
      context.fillRect(0, 500, blockSize, blockSize);
      fieldGreen();
    } else if (81 < y && y <= 331 && 843 <= x && x < 1093) {
      context.fillStyle = "red";
      context.fillRect(250, 0, blockSize, blockSize);
      fieldGreen();
    } else if (331 < y && y <= 581 && 843 <= x && x < 1093) {
      context.fillStyle = "red";
      context.fillRect(250, 250, blockSize, blockSize);
      fieldGreen();
    } else if (581 < y && y <= 831 && 843 <= x && x < 1093) {
      context.fillStyle = "red";
      context.fillRect(250, 500, blockSize, blockSize);
      fieldGreen();
    } else if (81 < y && y <= 331 && 1093 <= x && x < 1341) {
      context.fillStyle = "red";
      context.fillRect(500, 0, blockSize, blockSize);
      fieldGreen();
    } else if (331 < y && y <= 581 && 1093 <= x && x < 1341) {
      context.fillStyle = "red";
      context.fillRect(500, 250, blockSize, blockSize);
      fieldGreen();
    } else if (581 < y && y <= 831 && 1093 <= x && x < 1341) {
      context.fillStyle = "red";
      context.fillRect(500, 500, blockSize, blockSize);
      fieldGreen();
    }
  });
}
