define([
  "GameExperiment"

  // Libs

  // Modules

  // Plugins
],

function(GameExperiment) {

  return (function() {

    function Sprite(options) {
      this.actions = options.actions;
      this.width = options.width;
      this.height = options.height;
      this.canvas = options.canvas;

      // defaults
      this.tick_ratio = 1;
      this.frames = 1;

      this.x = options.x;
      this.y = options.y;
      this.tick_count = 0;
      this.sprite_x = 0;

      this.constructImageObjects();

      // bound methods
      this.tick = _.bind(this.tick, this);
    }

    Sprite.attributes = {
      img: '/assets/img/default.png'
    };

    Sprite.prototype.tick = function() {
      this.draw();

      this.tick_count++;
      if ( this.sprite_x / this.width === this.image.frames - 1 ) {
        this.sprite_x = 0;
      } else if ( this.tick_count % this.image.tick_ratio === 0 ) {
        this.sprite_x += this.width;
      }

    };

    Sprite.prototype.draw = function() {
      // temp: clear canvas
      // todo: create true frame buffers
      this.canvas.context.clearRect(0, 0 , 500, 500);
      this.canvas.context.drawImage(this.image.obj, this.sprite_x, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    };

    Sprite.prototype.setAction = function(action) {
      this.image = this.actions[action];
    };

    Sprite.prototype.constructImageObjects = function() {
      _.each(this.actions, function(action) {
        action.obj.src = action.src;
      });
    };

    return Sprite;

  })();

});

