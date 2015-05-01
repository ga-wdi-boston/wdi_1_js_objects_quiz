// Quiz: Javascript Functions are First Class

// Question 1

// Choose one of the following scenarios. Identify three likely objects in
// the scenario.  Then choose one of the objects and identify three to
// five likely attributes and three to five likely methods for that
// object. Remember to consider implicit objects as well as
// explicit ones.

// Scenario: A user visits a library catalog to borrow a book for
// pleasure reading.  She searches for several books, finds one that
// she wishes to borrow immediately.  She also finds two books that
// have waiting lists, and adds herself to the waiting list for each
// book.

//ANSWER:
//Objects: library, visitor, book
//Attributes of books: genre, author, year publishes
//Methods: search database, enter building, talk to librarian


// Question 2

// You are writing a recipe database!  Write a constructor for a
// Recipe object that takes a recipe name, a recipe category, a recipe
// preparation time, and a recipe total time.

// Times are human-readable strings like "2 hours" "3 days" "15 minutes"

// (your code here)
var Recipe = function(name,category,prepTime,totalTime){
  this.name = name;
  this.category = category;
  this.prepTime = prepTime;
  this.totalTime = totalTime;
  if (validRecipeCategories.indexOf(newCategory) !== -1){
    this.category=category;
  }
  }
}


// Question 3:

// Using the constructor you have written, create three Recipe objects
// and assign them to variables:

// 1. Grandmother's Chocolate Cake, a dessert, which takes 2 hours of
//    preparation and 12 hours total time

var chocolateCake = new Recipe('Grandmothers chocolate cake', 'desert', '2 hours', '12 hours');

// 2. Tuna Surprise Surprise, a casserole, which takes 45 minutes of
//    preparation and 45 minutes total time

var tunaSurprise = new Recipe('Tuna Surprise Surprise', 'a casserole', '45 minutes', '45 minutes');

// 3. Iced Cold-Brew Irish Coffee, a beverage, which takes 10 minutes of
//    preparation and 24 hours total time

var irishCoffee = new Recipe('Iced Cold-Brew Irish Coffee', 'a beverage', '10 minutes','24 hours');

// Question 4

// Add accessor functions for your recipes, with validation as
// described.  If the user passes in a value that is not valid, write
// a log message but do not change the object attributes.

// getRecipeName
Recipe.prototype.getRecipeName = function(){
  this.name;
}

// setRecipeName - once a recipe has a name, it cannot be set to the
// empty string.

Recipe.prototype.serRecipeName = function(newName){
  if (newName !== True){
    console.log("Invalid entry");
  }else{
    return this.name = newName;
  }
}

// setRecipeCategory - the only acceptable recipe categories are given
// in the validRecipeCategory array.

var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];

Recipe.prototype.setCategories = function(newCategory){
  var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];
  if (validRecipeCategories.indexOf(newCategory) !== -1) {
    this.category = newCategory;
  }
  else {
    console.log('Not an acceptable category.');
  }
}
