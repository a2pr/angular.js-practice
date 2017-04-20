(function () {
  
  var app= angular.module("newApp",[]);
  
  var FirstController = function ($scope) {
      
     var OnStart= function(){
        $scope.start= true ;
        $scope.message1= randomNumber(eventList.length -1)
      };
      function randomNumber(range){
            return Math.round( Math.random() * range );
        }
        var  eventList=[
            "You woke up in a cementary, with nothing in your pockets",
            "You open your eyes and feel the freeze cold wind of the glaciar",
            "You appear in the middle of a forest, with trees as high as the eye can see"
        ];
      $scope.message ="Hi, time to start your new adventure!"; 
     
};

app.controller("FirstController", FirstController);

}());