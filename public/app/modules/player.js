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
      img: "/assets/img/player_down.png",
      frames: 8,
      width: 22,
      height: 30,
      x: 10,
      y: 10,
      actions: {
        up: {
          obj: new Image(),
          src: "/assets/img/player_up.png",
          frames: 8,
          tick_ratio: 2
        },
        down: {
          obj: new Image(),
          src: "/assets/img/player_down.png",
          frames: 8,
          tick_ratio: 2
        },
        left: {
          obj: new Image(),
          src: "/assets/img/player_left.png",
          frames: 8,
          tick_ratio: 2
        },
        right: {
          obj: new Image(),
          src: "/assets/img/player_right.png",
          frames: 8,
          tick_ratio: 2
        }
      }
    };

    Player.prototype.initialize = function() {
      var events = [
        {
          keys: [37, 38, 39, 40],
          callback: this.move
        }
      ];
      this.controller = new Controller({canvas: this.canvas, events: events});
    };

    Player.prototype.move = function(key) {
      var action;
      switch (key) {
        case 37:
          this.x -= 2;
          action = "left";
          break;
        case 38:
          this.y -= 2;
          action = "up";
          break;
        case 39:
          this.x += 2;
          action = "right";
          break;
        case 40:
          this.y += 2;
          action = "down";
      }
      this.setAction(action);
      this.tick();
    };

    return Player;

  })(Sprite);

});

