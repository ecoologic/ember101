App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

// App.IndexRoute = [...] caused
// an Ember.CollectionView's content must implement Ember.Array. You passed [object Object]
// TypeError: content.addArrayObserver is not a function
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      name: "Ember101.com Tutorial",
      timer: 0

    };
  },
  // called when entering the route
  activate: function() {
    this.interval = setInterval(function() {
      var timer = this.get('controller.model.timer');
      this.set('controller.model.timer', timer + 1);
    }.bind(this), 1000);
  },
  // called when leaving the route
  deactivate: function() {
    clearInterval(this.interval);
  }
});
