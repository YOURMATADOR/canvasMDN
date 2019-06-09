let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

if (canvas.getContext) {
  console.log("====================================");
  console.log("Soportado");
  console.log("====================================");
} else {
  alert("Canvas no soportado");
}

function dibujar() {
  context.fillStyle = "#ff0000";
  context.fillRect(10, 10, 50, 50);
  context.fillStyle = "#00ff00";
  context.fillRect(20, 20, 50, 50);

  context.fillStyle = "#0000ff";
  context.strokeRect(30, 30, 50, 50);
  context.clearRect(30, 30, 20, 20);
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(150, 0);
  context.lineTo(150, 150);
  context.fill();
  context.closePath();

  context.beginPath(); //*
  context.arc(300, 70, 50, 0, Math.PI * 2, true);
  context.moveTo(280, 50);

  context.arc(280, 50, 10, 0, Math.PI * 2, true);
  context.moveTo(320, 50);

  context.arc(320, 50, 10, 0, Math.PI * 2, true);
  context.moveTo(330, 75);

  context.arc(300, 75, 30, 0, Math.PI, false);
  context.stroke();

  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 3; x++) {
      let radius = 20; //* 40 diametro
      let xx = 250 + x * 50;
      let yy = 250 + i * 50;
      let endAngle = Math.PI + (Math.PI * x) / 2; // 180 + ejemplo(180 * 0) / 2 = 90
      let startAngle = 0;
      let anticlockwise = i % 2 !== 0;
      context.beginPath();
      context.arc(xx, yy, radius, startAngle, endAngle, anticlockwise);
      if (i < 2) {
        context.stroke();
      } else {
        context.fill();
      }
    }
  }

  context.beginPath();
  context.moveTo(150, 250);
  context.quadraticCurveTo(120, 100, 250, 100);
  context.stroke();

  let rectangulo = new Path2D();
  rectangulo.rect(400, 400, 50, 50);
  context.fillStyle = "#00ee22";

  context.fill(rectangulo);
}

dibujar();
