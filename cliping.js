(function() {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");

  const make_start = (context, rad) => {
    for (let i = 0; i < 1; i++) {
      context.fillStyle = "#0f0";
      context.arc(
        500 - Math.floor(Math.random() * 500),
        500 - Math.floor(Math.random() * 500),
        600,
        (Math.PI / 180) * 0,
        (Math.PI / 180) * 360,
        true
      );
    }
  };

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.height, canvas.width);
  context.beginPath();
  context.arc(
    canvas.width / 2,
    canvas.height / 2,
    300,
    (Math.PI / 180) * 0,
    (Math.PI / 180) * 360,
    true
  );
  context.clip();

  let linearGrad = context.createLinearGradient(
    0,
    0,
    canvas.height,
    canvas.width
  );
  linearGrad.addColorStop(0, "#008");
  linearGrad.addColorStop(1, "#05F");
  context.fillStyle = linearGrad;
  context.fillRect(0, 0, 800, 800);
  for (let x = 0; x < 90; x++) {
    make_start(context, 200);
  }
})();
