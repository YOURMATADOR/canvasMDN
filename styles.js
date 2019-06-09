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
})();
