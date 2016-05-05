angular.module('portfolioApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/about');
  $stateProvider
  .state('home', {
    controller: 'baseCtrl',
    templateUrl: 'home.html',
    abstract: true
  })
  .state('about', {
    url: '/about',
    templateUrl: '/about/about.html',
    parent: 'home'
  })
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: '/portfolio/portfolio.html',
    parent: 'home'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: '/resume/resume.html',
    parent: 'home'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/contact/contact.html',
    parent: 'home'
  });
  // .state('schedule', {
  //   url: '/schedule',
  //   templateUrl: '/schedule/schedule.html',
  //   parent: 'home'
  // })
  //     .state('schedule.calendar', {
  //       url: '/calendar',
  //       templateUrl: '/schedule/calendar/calendar.html'
  //     })
  //     .state('schedule.toDo', {
  //       url: '/toDo',
  //       templateUrl: '/schedule/toDoList/toDo.html',
  //       controller: 'toDoCtrl'
  //     })
//   .state('referrals', {
//     url: '/referrals',
//     templateUrl: '/referrals/referrals.html',
//     parent: 'home'
//   })
//   .state('social', {
//     url: '/social',
//     templateUrl: '/social/social.html',
//     parent: 'home'
//   });
});
