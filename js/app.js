App = Ember.Application.create();

App.Router.map(function() {
  this.resource('user', {path: '/users/:user_id'});
  this.resource('editUser', {path: '/users/:user_id/edit'});
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
  events: {
    newUser: function() {
      var users = this.modelFor('application').users;
      var user = users.pushObject({
        id: users.length,
      });
      this.transitionTo('editUser', user);
    }
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
});

// id out of array caused
// Cannot call get with 'id' on an undefined object.
App.UserRoute = Ember.Route.extend({
  model: function(params) {
    return users[params.user_id];
  }
});

App.EditUserRoute = Ember.Route.extend({
  model: function(params) {
    return users[params.user_id];
  },
  events: {
    update: function() {
      var user = this.modelFor('editUser');
      this.transitionTo('user', user);
    }
  }
});

// data
var users = [
  {
    id: 0,
    first: 'Ryan',
    last: 'Florence',
    avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
  },
  {
    id: 1,
    first: 'Tom',
    last: 'Dale',
    avatar: 'https://si0.twimg.com/profile_images/1317834118/avatar.png'
  },
  {
    id: 2,
    first: 'Yehuda',
    last: 'Katz',
    avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
  }
];