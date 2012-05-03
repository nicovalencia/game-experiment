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
      frames: 8,
      width: 22,
      height: 30,
      x: 10,
      y: 10
    };

    Player.actions = {
      down: {
        frames: 8,
        img: "/assets/img/player.png"
      }
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
      this.y += 10;
      this.setAction(Player.actions.down);
      this.tick();
    };

    return Player;

  })(Sprite);

});

