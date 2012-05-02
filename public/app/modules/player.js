define([
  "GameExperiment",

  // Libs

  // Modules
  "modules/sprite"

  // Plugins
],

function(GameExperiment, Sprite) {

  // __extends Sprite
  var Player = (function(_super) {

    GameExperiment.__extends(Player, _super);

    Player.attributes = {
      name: 'John Doe',
      img: "/assets/img/player.png",
      width: 25,
      height: 30
    };

    function Player(options) {
      var args = _.extend(options, Player.attributes);
      return Player.__super__.constructor.call(this, args);
    }

    return Player;

  })(Sprite);

  return Player;

});

