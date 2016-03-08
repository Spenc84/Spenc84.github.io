angular.module('portfolioApp')

.directive('imgList', function($location, $rootScope){
  return {
    restrict: 'E',
    template: '<img ng-repeat="img in images" src="images/{{img.url}}.jpg" class="{{img.active}}"/>',
    scope: {},
    link: function(scope, element, attrs, controller){
      scope.images = [
        {active: 'activeImg', url: 'about'},
        {active: '', url: 'projects'},
        {active: '', url: 'games'},
        {active: '', url: 'media'},
        {active: '', url: 'journal'},
        {active: '', url: 'social'}
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
        {active: '', name: 'Projects', url: 'projects'},
        {active: '', name: 'Games', url: 'games'},
        {active: '', name: 'Media', url: 'media'},
        {active: '', name: 'Journal', url: 'journal'},
        {active: '', name: 'Social', url: 'social'}
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
.directive('myButton', function(){
  return {
    restrict: 'E',
    template: '<button class="expander" ng-click="expand()"><i class="icon">^</i></button>'
  };
});
