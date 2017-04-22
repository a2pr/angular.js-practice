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
  $scope.OnStart= function( ){
    $scope.start=true;
    $scope.greeting= eventList[randomNumber(eventList.length -1)];
    };
  
   var NameValidation= function (name) {
    if (name==="") {
      $scope.respond1="Too shy to talk aren't you? Oh welp i supose i will call you Dick.";
      hero.name="Dick";
      return 
        $scope.start2=true;
        hero.name;
    }else{
      hero.name= $scope.name;
      return hero.name;
    }
  };

  $scope.NamVal= function (name) { //no esta recibiendo el valor del input 
    $scope.start2=false;
    NameValidation(name);
    alert("Your name is"+ hero.name);
  }
  var randomNumber= function (range){
            return Math.round( Math.random() * range );
          };
  
  
};

app.controller("FirstController", FirstController);

}());