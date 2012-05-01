module("Core Module", {
  setup: function() {
  },
  teardown: function() {
  }
});

test("exposes application object to the window.", function() {
  ok(window.app);
});

