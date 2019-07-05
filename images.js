(function() {
  const canvas = document.querySelector("#mycanvas");
  const context = canvas.getContext("2d");
  let linkImg =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
  let img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    try {
      context.strokeStyle = "#000";

      context.drawImage(img, 0, 0);
      context.beginPath();
      context.moveTo(30, 90);
      context.lineTo(60, 180);
      context.lineTo(90, 100);
      context.lineTo(120, 200);
      context.stroke();

      localStorage.setItem("ejemplo", canvas.toDataURL("image/png"));
    } catch (error) {
      console.log(error);
    }
  };
  img.src = linkImg;
})();
