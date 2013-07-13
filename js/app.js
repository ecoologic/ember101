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
      timer: 0,
      users: users
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

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return users;
  }
});

// data
var users = [
  {
    id: 1,
    first: 'Ryan',
    last: 'Florence',
    avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
  },
  {
    id: 2,
    first: 'Tom',
    last: 'Dale',
    avatar: 'https://si0.twimg.com/profile_images/1317834118/avatar.png'
  },
  {
    id: 3,
    first: 'Yehuda',
    last: 'Katz',
    avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
  }
];