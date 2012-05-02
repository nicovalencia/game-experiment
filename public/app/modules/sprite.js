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
      this.width = options.width;
      this.height = options.height;
      this.context = options.context;

      // bound methods
      this.tick = _.bind(this.tick, this);
    }

    Sprite.attributes = {
      img: '/assets/img/default.png'
    };

    Sprite.prototype.tick = function() {
      this.context.drawImage(this.image_obj, 0, 0, this.width, this.height, 10, 10, this.width, this.height);
    };

    return Sprite;

  })();

});

