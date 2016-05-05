angular.module('portfolioApp')

.directive('imgList', function($location, $rootScope){
  return {
    restrict: 'E',
    template: '<img ng-repeat="img in images" ng-src="images/{{img.url}}.jpg" class="{{img.active}}"/>',
    scope: {},
    link: function(scope, element, attrs, controller){
      scope.images = [
        {active: 'activeImg', url: 'about'},
        {active: '', url: 'portfolio'},
        {active: '', url: 'resume'},
        {active: '', url: 'contact'},
        // {active: '', url: 'schedule'}
      ];
      $rootScope.$on("$locationChangeStart", function(event, nextUrl, currentUrl) {
        var oldIndx = null, newIndx = null;
        for (var i = 0; i < scope.images.length; i++) {
          if(scope.images[i].active === 'activeImg'){
            oldIndx = i;
          }
          if(scope.images[i].url === $location.url().split('/')[1]){
            newIndx = i;
          }
        }
        if(oldIndx || oldIndx === 0) scope.images[oldIndx].active = '';
        if(newIndx || newIndx === 0) scope.images[newIndx].active = 'activeImg';
      });
    }
  };
})
.directive('navBar', function($location, $rootScope){
  return {
    restrict: 'E',
    template: '<div ng-repeat="item in navItems" ui-sref="{{item.url}}" class={{item.active}}><a href="#/{{item.url}}">{{item.name}}</a></div>',
    scope: {},
    link: function(scope, element, attrs, controller){
      scope.navItems = [
        {active: 'activeItem', name: 'About', url: 'about'},
        {active: '', name: 'Portfolio', url: 'portfolio'},
        {active: '', name: 'Resume', url: 'resume'},
        {active: '', name: 'Contact', url: 'contact'},
        // {active: '', name: 'Schedule', url: 'schedule'}
      ];
      $rootScope.$on("$locationChangeStart", function(event, nextUrl, currentUrl) {
        var oldIndx = null, newIndx = null;
        for (var i = 0; i < scope.navItems.length; i++) {
          if(scope.navItems[i].active === 'activeItem'){
            oldIndx = i;
          }
          if(scope.navItems[i].url === $location.url().split('/')[1]){
            newIndx = i;
          }
        }
        if(oldIndx || oldIndx === 0) scope.navItems[oldIndx].active = '';
        if(newIndx || newIndx === 0) scope.navItems[newIndx].active = 'activeItem';
      });
    }
  };
})
.directive('fullscreen', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/fullscreen.html'
  };
});
