define([
  "GameExperiment",

  // Libs

  // Modules
  "modules/sprite",
  "modules/controller"

  // Plugins
],

function(GameExperiment, Sprite, Controller) {

  // __extends Sprite
  return (function(_super) {

    function Player(options) {
      this.canvas = options.canvas;
      var args = _.extend(options, Player.attributes);

      // bound methods
      this.move = _.bind(this.move, this);

      return Player.__super__.constructor.call(this, args);
    }

    GameExperiment.__extends(Player, _super);

    Player.attributes = {
      name: 'John Doe',
      img: "/assets/img/player.png",
      width: 25,
      height: 30
    };

    Player.prototype.initialize = function() {
      var events = [
        {
          keys: [40],
          callback: this.move
        }
      ];
      this.controller = new Controller({canvas: this.canvas, events: events});
    };

    Player.prototype.move = function(key) {
      this.tick();
    };

    return Player;

  })(Sprite);

});

