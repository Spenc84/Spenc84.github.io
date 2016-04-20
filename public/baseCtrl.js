angular.module('portfolioApp')
.controller('baseCtrl', function($scope){

  $scope.fillView = 'collapsed';

  $scope.expand = function(){
    if($scope.fillView === "collapsed") $scope.fillView = 'expanded';
    else $scope.fillView = "collapsed";
  };
});
