let canvas = document.querySelector("#canvas");
console.log(canvas.getContext);

(function() {
  let context = canvas.getContext("2d");
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < 6; x++) {
      let xx = 50 + x * 10;
      let yy = 50 + i * 10;

      context.fillStyle = `rgb(${Math.floor(255 - 40 * x)},${Math.floor(
        255 - 20 * i
      )},0)`;
      context.fillRect(xx, yy, 50, 50);
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < 6; x++) {
      let xx = 200 + x * 10;
      let yy = 200 + i * 10;

      context.strokeStyle = `rgb(${Math.floor(255 - 40 * x)},${Math.floor(
        255 - 20 * i
      )},0)`;
      context.strokeRect(xx, yy, 50, 50);
    }
  }
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < 6; x++) {
      let xx = 400 + x * 10;
      let yy = 400 + i * 10;

      context.strokeStyle = `rgb(${Math.floor(255 - 40 * x)},${Math.floor(
        255 - 20 * i
      )},0)`;
      context.beginPath();
      context.arc(xx, yy, 5, 0, Math.PI * 2, true);
      context.stroke();
    }
  }

  //* Rojo
  context.moveTo(250, 50);
  context.fillStyle = "#F04";
  context.fillRect(250, 50, 50, 50);

  //* verde
  context.fillStyle = "#0F2";
  context.fillRect(300, 50, 50, 50);

  context.fillStyle = "#0ff";
  context.fillRect(250, 100, 50, 50);

  context.fillStyle = "#Ff0";
  context.fillRect(300, 100, 50, 50);
  context.globalAlpha = 0.2;

  context.fillStyle = "#eee";

  for (let i = 0; i < 7; i++) {
    context.moveTo(300, 100);
    context.arc(300, 100, 8 * i, 0, Math.PI * 2, true);
    context.fill();
  }

  context.globalAlpha = 1;

  //* Rojo
  context.moveTo(250, 50);
  context.fillStyle = "#F04";
  context.fillRect(100, 320, 200, 50);

  //* verde
  context.fillStyle = "#0F2";
  context.fillRect(100, 370, 200, 50);

  context.fillStyle = "#0ff";
  context.fillRect(100, 420, 200, 50);

  context.fillStyle = "#Ff0";
  context.fillRect(100, 470, 200, 50);
  context.globalAlpha = 0.2;

  context.fillStyle = "#eee";

  for (let x = 0; x < 4; x++) {
    for (let i = 0; i < 10; i++) {
      let xx = 105 + i * 20;
      let yy = 325 + x * 50;
      context.fillStyle = `rgba(249,249,249,${(i + 1) / 10})`;
      context.moveTo(300, 100);
      context.fillRect(xx, yy, 40, 40);
      context.fill();
    }
  }
  context.globalAlpha = 1;

  context.beginPath();
  context.strokeStyle = "blue";
  context.moveTo(400, 40);
  context.lineTo(600, 40);
  context.moveTo(400, 90);
  context.lineTo(600, 90);
  context.stroke();

  let lineaFinal = ["butt", "round", "square"];

  for (let i = 0; i < lineaFinal.length; i++) {
    context.lineCap = lineaFinal[i];
    let xx = 420 + i * 50;
    let yy = 40;
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(xx, yy);
    context.lineTo(xx, 90);
    context.stroke();
  }
  context.lineWidth = 5;

  let lineJoins = ["round", "bavel", "miter"];
  for (let i = 0; i < lineJoins.length; i++) {
    context.lineJoin = lineJoins[i];
    context.beginPath();
    let yy = 600 + i * 20;
    context.moveTo(0, yy);
    context.lineTo(20, yy + 30);
    context.lineTo(40, yy);
    context.lineTo(60, yy + 30);
    context.lineTo(80, yy);
    context.stroke();
  }
  let posicionLinea = 1;
  const dibujarAnimacion = () => {
    context.lineWidth = 1;
    context.clearRect(600, 600, 60, 60);
    context.setLineDash([4, 9]);
    context.lineDashOffset = +posicionLinea;
    context.strokeRect(600, 600, 60, 60);
  };
  const moverLinea = () => {
    posicionLinea++;
    if (posicionLinea > 16) {
      posicionLinea = 1;
    }
    dibujarAnimacion();
    setTimeout(() => {
      moverLinea();
    }, 20);
  };
  moverLinea();

  context.moveTo(400, 400);
  let gradienteRectandulo = context.createLinearGradient(400, 150, 600, 350);
  gradienteRectandulo.addColorStop(0, "#f20");
  gradienteRectandulo.addColorStop(0.5, "#f03");
  gradienteRectandulo.addColorStop(0.5, "#80a");
  gradienteRectandulo.addColorStop(1, "#20f");
  context.fillStyle = gradienteRectandulo;

  context.fillRect(400, 150, 200, 200);

  context.moveTo(500, 500);
  context.beginPath();
  let firstPattern = context.createRadialGradient(500, 500, 10, 510, 500, 50);
  firstPattern.addColorStop(0, "#072");
  firstPattern.addColorStop(0.5, "#092");
  firstPattern.addColorStop(1, "#0f6");
  context.arc(500, 500, 60, 0, Math.PI * 2, true);
  context.fillStyle = firstPattern;
  context.fill();
  let imagePatter = new Image();
  imagePatter.src = "patron.png";
  imagePatter.onload = () => {
    let imagePatterLoaded = context.createPattern(imagePatter, "repeat");
    context.fillStyle = imagePatterLoaded;

    context.fillRect(600, 450, 100, 100);
  };
  context.font='20px sans-serif';
  context.shadowOffsetX=2;
  context.shadowOffsetY=2;
  context.shadowBlur=1;
  context.shadowColor='#333';
  context.fillStyle='black';
  context.fillText("Hola canvas ", 700, 600, 100);
  
  
})();
