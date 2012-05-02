define([
  "GameExperiment"

  // Libs

  // Modules

  // Plugins
],

function(GameExperiment) {

  // Create a new module
  var Canvas = GameExperiment.module();

  Canvas.attributes = {
    canvas_id: "canvas",
    canvas_width: 500,
    canvas_height: 500
  };

  Canvas.initialize = function() {
    this.render(function() {
      Canvas.setup();
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
    this.context.fillStyle = "rgb(200,0,0)";  
    this.context.fillRect (10, 10, 55, 50); 
    setTimeout(Canvas.loop, 5000);
  };

  // Required, return the module for AMD compliance
  return Canvas;

});

