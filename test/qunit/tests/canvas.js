module("Canvas Module", {
  setup: function() {
    this.Canvas = require("modules/canvas");
  },
  teardown: function() {
  }
});

test("exists.", function() {
  ok(this.Canvas);
});

