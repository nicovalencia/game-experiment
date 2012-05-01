define([
  // Libs
  "jquery",
  "use!underscore",
  "use!handlebars"
],

function($, _, Handlebars) {
  // Put application wide code here

  return {
    // This is useful when developing if you don't want to use a
    // build process every time you change a template.
    //
    // Delete if you are using a different template loading method.
    fetchTemplate: function(path, done) {
      var JST = window.JST = window.JST || {};
      var def = new $.Deferred();

      // Should be an instant synchronous way of getting the template, if it
      // exists in the JST object.
      if (JST[path]) {
        if (_.isFunction(done)) {
          done(JST[path]);
        }

        return def.resolve(JST[path]);
      }

      // Fetch it asynchronously if not available from JST 
      $.get(path, function(contents) {
        JST[path] = Handlebars.compile(contents);

        // Set the global JST cache and return the template
        if (_.isFunction(done)) {
          done(JST[path]);
        }

        // Resolve the template deferred
        def.resolve(JST[path]);
      }, "text");

      // Ensure a normalized return value (Promise)
      return def.promise();
    },

    // Create a custom object with nested {}
    module: function(additionalProps) {
      return _.extend({}, additionalProps);
    }

  };
});
