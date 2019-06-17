(function() {
  const canvas = document.querySelector("#mycanvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "#f00";
  context.font = "50px sans-serif";

  context.fillText("Hola canvas putos", 100, 100, 500);
  context.textAlign = "left";

  context.strokeText(
    "Hola canvas con stroke , hello canvas with stroke C:",
    0,
    200,
    900
  );
  const text = context.measureText("foo");
  text.width;
})();
