'use strict';

let app2 = angular.module('app2', []);

app2.controller('MainController', function($scope){
  $scope.name = 'Kyle';
  $scope.adj = 'Lazy';
});

app2.controller('ChildController', function($scope){
  $scope.name = 'JJ';
  $scope.adj = 'Bad';
});

app2.controller('GrandChildController', function($scope){
  $scope.name = 'Dog';
});

app2.controller('ClousureController', function($scope){
  $scope.adjFn = function(adj){
    return function(name){
      console.log('hi');
      return `${adj} ${name}`;
    };
  };

  $scope.badFn = $scope.adjFn('bad');
});