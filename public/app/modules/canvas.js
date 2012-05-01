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
    this.render();
  };

  Canvas.render = function() {
    var options = {
      id: this.attributes.canvas_id,
      width: this.attributes.canvas_width,
      height: this.attributes.canvas_height
    };
    app.fetchTemplate("app/templates/canvas.html", function(template) {
      $('#main').append( template(options) );
    });
  };

  // Required, return the module for AMD compliance
  return Canvas;

});

