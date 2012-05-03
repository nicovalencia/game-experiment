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
    $(document).on("keydown", "*", function(event) {
      return Canvas.keyHandler(event);
    });
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
    setTimeout(Canvas.loop, 100);
  };

  Canvas.keyBindings = [];

  Canvas.keyHandler = function(event) {
    var stop_prop;
    _.each(Canvas.keyBindings, function(binding) {
      if ( binding.key === event.which ) {
        binding.callback();
        stop_prop = false;
      } else { stop_prop = true; }
    });
    return stop_prop;
  };

  Canvas.addKeyListener = function(key, callback) {
    Canvas.keyBindings.push({key: key, callback: callback});
  };

  Canvas.createPlayer = function() {
    var config = {
      canvas: Canvas,
      name: "Hero"
    };

    Canvas.hero = new Player(config);
    Canvas.hero.initialize();
  };

  return Canvas;

});

