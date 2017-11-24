'use strict';
var app1 = angular.module('app1',[]);

app1.controller('cltr1', function TodoController($scope){
  $scope.todos = [
    {name:'Learning Angular', completed:false},
    {name:'Learning Sass', completed:true},
    {name:'Learning React', completed:true},
    {name:'Integrating Angular with Express and Node', completed:false}
  ];

  $scope.flipAllCompleted = function(list){
    return list.map(function(el){
      el.completed = !el.completed;
    });
  };
});
