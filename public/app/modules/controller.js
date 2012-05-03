define([
  "GameExperiment"

  // Libs

  // Modules

  // Plugins
],

function(GameExperiment) {

  return (function() {

    function Controller(options) {
      this.canvas = options.canvas;
      this.events = options.events;
      this.registerKeyEvents();
    }

    Controller.prototype.registerKeyEvents = function() {
      var canvas = this.canvas;
      _.each(this.events, function(event){
        _.each(event.keys, function(key) {
          canvas.addKeyListener(key, function() { event.callback(key); });
        });
      });
    };

    return Controller;

  })();

});

