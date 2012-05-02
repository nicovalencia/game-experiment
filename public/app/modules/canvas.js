define([
  "GameExperiment",

  // Libs

  // Modules
  "modules/player"

  // Plugins
],

function(GameExperiment, Player) {

  var Canvas = {};

  Canvas.attributes = {
    canvas_id: "canvas",
    canvas_width: 500,
    canvas_height: 500
  };

  Canvas.initialize = function() {
    this.render(function() {
      Canvas.setup();
      Canvas.createPlayer();
      Canvas.loop();
    });
  };

  Canvas.setup = function() {
    this.$el = document.getElementById('canvas');
    this.context = this.$el.getContext('2d');
  };

  Canvas.render = function(callback) {
    var options = {
      id: this.attributes.canvas_id,
      width: this.attributes.canvas_width,
      height: this.attributes.canvas_height
    };
    app.fetchTemplate("app/templates/canvas.html", function(template) {
      $('#main').append( template(options) );
      if ( _.isFunction(callback) ) callback();
    });
  };

  Canvas.loop = function() {
    /*
     * This will reference a player movement controller
     */
    Canvas.hero.tick();

    setTimeout(Canvas.loop, 100);
  };

  Canvas.createPlayer = function() {
    var config = {
      context: Canvas.context,
      name: "Hero"
    };

    Canvas.hero = new Player(config);
  };

  return Canvas;

});

