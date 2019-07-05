let type = "WebGL";

let Application = PIXI.Application;
let utils = PIXI.utils;
let Loader = PIXI.Loader;
let Sprite = PIXI.Sprite;
let Texture = PIXI.Texture;

if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);

let app = new Application({
  width: 500,
  height: 500
});

document.body.appendChild(app.view);
Loader.shared
  .add("js/stars.jpg")
  .add("estrellas", "js/stars.jpg") // ! this will 
  .load(setup); //* without alias
// let stars_with_alias = Loader.shared..load(setup); //* with an alias
function setup() {
  let stars = new Sprite(Loader.shared.resources["js/stars.jpg"].texture);
  //   app.stage.addChild(stars);

  // *  OR
  let stars_with_alias_sprite = new Sprite(
    Loader.shared.resources.estrellas.texture
  );
  app.stage.addChild(stars_with_alias_sprite);
  // ? how to get the texture cache ?
  // * PIXI.utils.TextureCache["anyTexture.jpg"]
  // * OR if you want to make an image without parsing it to a texture you can use Texture instead
  //   let base = new PIXI.BaseTexture("js/stars.jpg"),
  //     texture = new PIXI.Texture(base),
  //     sprite = new PIXI.Sprite(texture);
  //     app.stage.addChild(sprite)
  //   app.stage.removeChild(stars) // ? eliminar el sprite
  console.log(app.stage);
}

console.log(
  "%c %c Hola mundo ",
  "background-color:blue;width:200px;padding:5px",
  "font-weight:bold;color:red;background-color:black;padding:5px;"
);
