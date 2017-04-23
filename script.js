(function () {
  
  var app= angular.module("newApp",[]);
  
  var FirstController = function ($scope) {
    
    $scope.message ="Hi, time to start your new adventure!"; 
    $scope.start= false;
    var  eventList=[
    "You woke up in a cementary, with nothing in your pockets",
    "You open your eyes and feel the freeze cold wind of the glaciar",
    "You appear in the middle of a forest, with trees as high as the eye can see"
      ]; 
    var hero ={};
    var randomNumber= function (range){ 
      return Math.round( Math.random() * range );
      };
  $scope.OnStart= function( ){
    $scope.start=true;
    $scope.greeting= eventList[randomNumber(eventList.length -1)];
    };
  
   var NameValidation= function (name) {
    if (!name) {
      $scope.start2=true;
      hero.name="Dick";
      return $scope.respond1="Too shy to talk aren't you? Oh welp i supose i will call you Dick.";
    }else{
      hero.name= $scope.name;
      $scope.start2=true;
      return $scope.respond1="hi Mr or Ms"+ " " + hero.name + " " + " You are on top of my home. "
      +"So i demand you, to look for a new home for me and my children ";
    }
  };

  $scope.NamVal= function (name) {
    $scope.start2=false;
    NameValidation(name);
    $scope.respond2="Do you have any special skills? are you a Mage?, or Warrior?, or perphaps an Archer?";
    $scope.start3=true;
  }   
};

app.controller("FirstController", FirstController);

}());