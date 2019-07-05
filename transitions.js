(function() {
  let canvas = document.querySelector("#mycanvas");
  let context = canvas.getContext("2d");
  context.fillStyle = "#000";

  //   context.fillRect(10, 10, 200, 200);
  //   // ? with save you can store the state of canvas
  //   context.save();
  //   context.fillStyle = "#029";
  //   context.fillRect(20, 20, 150, 150);
  //   context.save();
  //   context.fillStyle = "#0ff";

  //   context.globalAlpha = 0.5;
  //   context.fillRect(30, 30, 100, 100);
  //   context.restore();
  //   context.fillRect(40, 40, 50, 50);
  //   context.restore(50, 50, 20, 20);

  // * transitions
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      context.save();
      context.fillStyle = `#00${(y * 6).toString(16)}`;
      context.translate(x * 50, y * 50);
      context.fillRect(0, 0, 25, 25);
      context.restore();
    }
  }
  let sin = Math.sin(Math.PI / 6);
  let cos = Math.cos(Math.PI / 6);
  context.translate(100, 100);

  for (let i = 0; i < 16; i++) {
    context.fillStyle = `#${i * 2}ff`;
    context.fillRect(0, 0, 100, 10);
    context.transform(cos, sin, -sin, cos, 0, 0); // * multiplica la posicion actual 
  }

  context.translate(450, 450);
  context.fillStyle = "#f00";
  context.fillRect(0, 0, 40, 40);
  context.scale(-1, 1);
  context.fillText("Eduardo Avila", 10, 10, "100");

  context.restore();
  context.save();

  context.fillStyle = "#000";
  context.translate(300, 300);
  context.fillRect(0, 0, 50, 50);
  context.restore();
  context.translate(300, 300);
  context.rotate((Math.PI / 180) * 20);
  context.fillStyle = "#f00";
  context.fillRect(0, 0, 50, 50);

  context.restore();
  context.translate(400, 400);

  // * scaling my name
})();
