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

 

  var sunflower = new Flower("Yellow", 50, false, "California");
  sunflower.flowerName= "Sunflower";
  sunflower.isEdible = true;
  sunflower.leafCount = 3;
  sunflower.comments = "Sunflowers are especially well known for their symmetry based on Fibonacci numbers and the Golden angle.";
  sunflower.image = "images/flower4.JPEG";

  var flowerTemplate = _.template($('#flower-template').html());
 
  var dahlia = new Flower("Maroon", 109, true, "Mexico");
  dahlia.flowerName = "Dahlia";
  dahlia.leafCount = 8;
  dahlia.isEdible = true;
  dahlia.image = "images/flower7.JPEG";
  dahlia.comments = "Dahlia's are most commonly used for decorative purposes on cakes, tarts and pastries. Serve alongside cheese or desserts as a garnish. Remove the petals of the Dahlia and add them to grain or green salads to add a pop of color.(I got very hungry writing this!)";

  var westernDahlia = new Flower("Orange", 100, true, "Mexico");
  westernDahlia.flowerName = "Western Dahlia";
  westernDahlia.leafCount = 10;
  westernDahlia.isEdible = true;
  westernDahlia.image = "images/flower3.JPEG";
  westernDahlia.comments = 'It is believed that these flowers were given their name by Antonio José Cavanilles, Director of the Royal Gardens in Madrid. He actually named the flower after another botanist named Anders Dahl.';

  var daisy = new Flower("Pink", 89, true, "Canary Islands");
  daisy.flowerName = "Daisy";
  daisy.leafCount = 0;
  daisy.image = "images/flower5.JPEG";
  daisy.isEdible = true;
  daisy.comments = "Marguerite daisy flowers measure about 2 ½ inches across and come in shades of white, pink or yellow. Most varieties feature a single layer of radiating petals around a large central eye, giving the plant its daisylike look. Marguerite daisy plants grow to about 3 feet tall and can spread over 3 feet of bed. The deep green foliage is highly fragrant and when smoked makes you giggle. The leaves are deeply cut, which gives the plant its full appearance and provides texture in the garden bed.";

  var hydrangea = new Flower("Blue-green", 60, true, "SE Asia");
  hydrangea.image = "images/flower6.JPEG";
  hydrangea.flowerName = "Hydrangea";
  hydrangea.leafCount = 2;
  hydrangea.isEdible = false;
  hydrangea.comments = "Used most often as an ornamental plant, these large, and beautiful flowers are toxic. However, that doesn't stop some from brewing these cyanide laced blossoms into tea.";

 
  var rose = new Flower("Red", 32, false, "Asia");
  rose.comments = "Rose hips are occasionally made into jam, jelly, marmalade, and soup or are brewed for tea, primarily for their high vitamin C content.";
  rose.image = "images/flower1.JPEG";
  rose.isEdible = false;
  rose.leafCount = 5;
  rose.flowerName = "Rose";
  


  var allFlowers = [sunflower, dahlia, westernDahlia, daisy, rose];
  
  allFlowers.forEach(function(flower){
    var flowerHTML = flowerTemplate(flower);
    $("h1").append(flowerHTML);
  });



});