require([
  "GameExperiment",

  // Libs

  // Modules
  "modules/canvas"
],

function(GameExperiment, Canvas) {

  // Attach application namespace to window
  window.app = GameExperiment;

  $(function() {
    Canvas.initialize();
  });

});

