let type = "WebGL";

let Application = PIXI.Application;
let utils = PIXI.utils;
let TextureCache = PIXI.utils.TextureCache;
let Loader = PIXI.Loader;
let Sprite = PIXI.Sprite;
let Texture = PIXI.Texture;
let Rectangle = PIXI.Rectangle;
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);

let app = new Application({
  width: 500,
  height: 500
});

Loader.shared
  .add("js/stars.jpg")
  .add("estrellas", "js/stars.jpg") // ! this will throw an error, because the cache already loaded it
  .add(
    "js/identicon.png",
    () => console.log("Load finish") //* callback funtion when the image finished to loading
  )
  .add("js/tileset.png")
  // ¡ add("path/toimage.pgn",)
  .load(setup); //* without alias
// let stars_with_alias = Loader.shared..load(setup); //* with an alias
function setup() {
  let tileset_sprites = new Sprite(
    Loader.shared.resources["js/stars.jpg"].texture
  );

  let stars = new Sprite(Loader.shared.resources["js/stars.jpg"].texture);
  //   app.stage.addChild(stars);
  let identicon_sprite = new Sprite(
    Loader.shared.resources["js/identicon.png"].texture
  );

  let tiles_texture = new Sprite(TextureCache["js/tileset.png"]);
  // *  OR

  let stars_with_alias_sprite = new Sprite(
    Loader.shared.resources.estrellas.texture
  );
  app.stage.addChild(stars_with_alias_sprite);
  app.stage.addChild(identicon_sprite);

  // ? how to get the texture cache ?
  // * PIXI.utils.TextureCache["anyTexture.jpg"]
  // * OR if you want to make an image without parsing it to a texture you can use Texture instead
  //   let base = new PIXI.BaseTexture("js/stars.jpg"),
  //     texture = new PIXI.Texture(base),
  //     sprite = new PIXI.Sprite(texture);
  //     app.stage.addChild(sprite)
  //   app.stage.removeChild(stars) // ? eliminar el sprite
  console.log(app.stage);
  //* grapping the texture inside of the rectangle, scaling and auto resizing it (the sprite one)
  let rectangle_tile_sprite = new Rectangle(50, 50, 64, 64);
  tiles_texture.frame = rectangle_tile_sprite;

  stars_with_alias_sprite.x = 90;
  stars_with_alias_sprite.y = 90;
  identicon_sprite.position.set(200, 250); // * to set the position of the sprite, params are (x,y)
  app.stage.addChild(tiles_texture);
  tiles_texture.x = 32;
  tiles_texture.y = 32;
  // ? scaling the sprites
  stars_with_alias_sprite.scale.y = 2;
  identicon_sprite.scale.x = 0.5;
  // ? how to change the pivot of the image

  //   identicon_sprite.pivot(x,y) //* pivot in pixils
  identicon_sprite.anchor.set(0.5, 0.5); //* pivot in percentage  0~1
  identicon_sprite.rotation = Math.PI * 1.5;
}

function load_function(loader, resource) {
  console.log("====================================");
  console.log(
    `%c canvas is loading %c ${loader.progress}%`,
    "font-size:1rem;color:blue",
    "color:red;font-weight:bold;font-size:2rem;"
  );
  console.log("====================================");
}
Loader.shared.on("progress", load_function); //* load event
console.log(
  "%c %c Hola mundo ",
  "background-color:blue;width:200px;padding:5px",
  "font-weight:bold;color:red;background-color:black;padding:5px;"
);
document.body.appendChild(app.view);
