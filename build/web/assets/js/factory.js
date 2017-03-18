/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myAppF', ['angularTreeview']);
app.controller('customersCtrlF', function ($scope, $http) {
  
    //load event 0
    $scope.$on('LoadListtreeOK', function (){
    $http.get("assets/js/tree.json")
      .success(function (response) {
           $scope.roleList =response; 
            //LoadListLabelsOK events is ready
           $scope.$emit('LoadListLabelsOK');
            });
        });
          $scope.$emit('LoadListtreeOK');
     });
        