// an object representing a dog
var myDog = {
    "name": "Patrick",
    "legs": 2,
    "tails": 1,
    "friends of dog": ["Ted", "Filo"]
  };

// access an objects property with dot notation
var dogLegs = myDog.legs;

// for properties that have spaces in name, need to use bracket notation
var dogFriends = myDog["friends of dog"];

// can also use bracket notation like this
var dogName = "name";
var myDogName = myDog[dogName];
console.log(myDogName);

// updating an object property
myDog.name = "Teddy";
console.log(myDog.name);
myDog["name"] = "Teddie";
console.log(myDog.name);

// can also add properties to existing objects
myDog.bark = "woof";
console.log(myDog.bark);

// deleting an objects property
delete myDog.tails;

// check if an object has a given property
var hasLegs = myDog.hasOwnProperty(legs);

// access properties of nested objects
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
var gloveBoxContents = myStorage.car.inside["glove box"];