angular.module('portfolioApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/about');
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'about/about.html'
  })
  .state('projects', {
    url: '/projects',
    templateUrl: 'projects/projects.html'
  })
  .state('games', {
    url: '/games',
    templateUrl: '/games/games.html'
  })
  .state('media', {
    url: '/media',
    templateUrl: '/media/media.html'
  })
  .state('journal', {
    url: '/journal',
    templateUrl: '/journal/journal.html'
  })
      .state('calendar', {
        url: '/journal/calendar',
        templateUrl: '/journal/calendar/calendar.html'
      })
      .state('toDo', {
        url: '/journal/toDo',
        templateUrl: '/journal/toDoList/toDo.html',
        controller: 'toDoCtrl'
      })
  .state('social', {
    url: '/social',
    templateUrl: '/social.html'
  });
});
