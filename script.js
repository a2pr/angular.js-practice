(function () {
  
  var app= angular.module("newApp",[]);
  
  var FirstController = function ($scope) {
      
     /* var OnStart= function(){
        var start= true ;
      };*/
      $scope.message ="Hi, time to start your new adventure!"; 
      $scope.message1= "history";
};

app.controller("FirstController", FirstController);

}());