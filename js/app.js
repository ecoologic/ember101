App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


App.set('secondsOnPage', 0);
setInterval(function() {
  App.set('secondsOnPage', App.get('secondsOnPage') + 1);
}, 1000);
