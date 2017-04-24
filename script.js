(function () {
  
  var app= angular.module("newApp",[]);
  
  var FirstController = function ($scope) {
    
    $scope.message ="Hi, time to start your new adventure!"; 
    $scope.start0=false;
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
    $scope.start0=true;
    };
  
   var NameValidation= function (name) {
    if (!name) {
      hero.name="Dick";
      return $scope.respond1="Too shy to talk aren't you? Oh welp i supose i will call you Dick.";
    }else{
      hero.name= $scope.name;
      return $scope.respond1="hi Mr or Ms"+ " " + hero.name + " " + " You are on top of my home. "
      +"So i demand you, to look for a new home for me and my children ";
    }
  };

    var ClassValidation= function (type) {
      if(type==="mage"){
          hero.type= $scope.type;
        /* $scope.HeroClassUpdated="You choose mage class. Base Stats are as follows: Damage= 1, Health= 4, Agility=4";*/
          return  $scope.CrowMessage="Oh how lucky i'm. Can you fix my house " + " "+ hero.type +"? no then what can you do?"+" which arcane magic do you posses? perphaps"
         +"you can cause destruction with fireballs? Or maybe you control the tempature with Ice age? or you could shake the ground itself"+ 
         "with Earth manipulation?"; 
      } else if (type==="warrior" || type === "archer") {
          $scope.start3=true;
          hero.type= $scope.type;
         /* $scope.HeroClassUpdated="You choose warrior class. Base stats are as follows: Damage=4, Health= 4, Agility=2";*/
          return  $scope.CrowMessage="Great im stuck with a lowly" + " "+ hero.type;
      }
    }
    var UpdatedStats= function (type) {
      if (type===hero.type) {
        if (type==="mage") {
          $scope.start3=true;
          hero.damage=1;
          hero.health=4;
          hero.agility=4;
          return $scope.UpdatedStatsMessage="You choose mage class. Base Stats are as follows: Damage= 1, Health= 4, Agility=4";
        }else if (type==="warrior") {
          $scope.start3=true;
          hero.damage=4;
          hero.health=4;
          hero.agility=1;
          return $scope.UpdatedStatsMessage="You choose warrior class. Base stats are as follows: Damage=4, Health= 4, Agility=2";
        } else if (type==="archer") {
          $scope.start3=true;
          hero.damage=2;
          hero.health=3;
          hero.agility=4;
          return $scope.UpdatedStatsMessage="You choose warrior class. Base stats are as follows: Damage=2, Health= 3, Agility=4";
        }
      }
      
    }

  $scope.NamVal= function (name) { 
    NameValidation(name);
    $scope.respond2="Do you have any special skills? are you a Mage?, or Warrior?, or perphaps an Archer?";
    $scope.start2=true;
    $scope.start=false;
  }

  $scope.ClassVal= function (type) {
    $scope.start3=false;
    ClassValidation(type);
    UpdatedStats(hero.type);
  $scope.start2=false;
  }  
};

app.controller("FirstController", FirstController);

}());