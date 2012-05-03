define([
  "GameExperiment"

  // Libs

  // Modules

  // Plugins
],

function(GameExperiment) {

  return (function() {

    function Sprite(options) {
      this.image_obj = new Image();
      this.image_obj.src = options.img;
      this.frames = options.frames;
      this.width = options.width;
      this.height = options.height;
      this.canvas = options.canvas;
      this.x = options.x;
      this.y = options.y;
      this.sprite_x = 0;

      // bound methods
      this.tick = _.bind(this.tick, this);
    }

    Sprite.attributes = {
      img: '/assets/img/default.png'
    };

    Sprite.prototype.tick = function() {
      this.canvas.context.drawImage(this.image_obj, this.sprite_x, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      if ( this.sprite_x === this.width * this.frames - this.width ) {
        this.sprite_x = 0;
      } else {
        this.sprite_x += this.width;
      }
    };

    Sprite.prototype.setAction = function(options) {
      this.image_obj.src = options.img;
      this.frames = options.frames;
    };

    return Sprite;

  })();

});

