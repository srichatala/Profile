/**
 * Created by chatalas on 8/9/2015.
 */
var app = angular.module("myWorldApp",[]);

app.controller('myWorldCtrl',function($scope,$http){
    $http.get('/emp')
        .success(function(response){
            console.log("Hi There"+response);
           $scope.employees = response;
        });
});


