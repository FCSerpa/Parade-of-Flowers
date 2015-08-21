$(function(){


  function Flower(color, petals, smellsPretty, origin){
     /* Properties */
     // Passed-in values
     this.color = color;
     this.petals = petals;
     this.smellsPretty= smellsPretty;
     this.origin = origin;

     // Default values
     this.flowerName;
     this.image = '';
     this.comments;
     this.isEdible = false;
     this.wiltFactor = 100; //0 is dead, 100 is fresh
     

      /* Methods */
     this.sniff = function(){
         console.log("Sniff Sniff Sniff!");
     };
     // Demonstrates use of arguments with methods
     this.smellsGood = function(answer) {
         if (answer) {
             return 'This flower smells amazing!';
         } else {
             return 'What a noxious weed!';
         }
     };
     // Demonstrates use of local object variables
     this.describe = function(answer) {
         alert("This flower is " + this.color + ".");
       }
     /// Demonstrates object to object interaction
     this.compare =  function(otherFlower) {
         return("My " + this.color + " flower is much prettier than your " +
           otherFlower.color + " flower :P");
     };
     // append html string to website 
     this.render = function() {
         $('body').append("<p>My pretty flower is " + this.color +
           " and has " + this.petals + " pristine petals.");
     };
     // displays message to console
     this.giveFlower= function(){
         console.log("Here's a flower")
      };
  }

 

  var sunflower = new Flower("yellow", 50, false, "California");
  sunflower.flowerName= "Sunflower";
  sunflower.isEdible = true;
  sunflower.leafCount = 3;
  sunflower.comments = "Sunflowers are especially well known for their symmetry based on Fibonacci numbers and the Golden angle.";
  sunflower.image = "flower4.JPEG";

  var flowerTemplate = _.template($('#flower-template').html());
 
  var allFlowers = [sunflower];
  
  allFlowers.forEach(function(flower){
    var flowerHTML = flowerTemplate(flower);
    $("h1").append(flowerHTML);
  });



});