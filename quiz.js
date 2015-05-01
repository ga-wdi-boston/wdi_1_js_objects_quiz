// Quiz: Javascript Functions are First Class

// Question 1

  Shoe Website

  objects
  user
  shoes
  shoppingcart


  attributes of shoes
  color, size, style, gender
  methods of shoes
  view details, click to zoom, change color, add/remove to cart, proceed to checkout



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

// Question 2

// You are writing a recipe database!  Write a constructor for a
// Recipe object that takes a recipe name, a recipe category, a recipe
// preparation time, and a recipe total time.

// Times are human-readable strings like "2 hours" "3 days" "15 minutes"

var Recipe = function(name, category, prep_time, total_time) {
  this.name = name;
  this.category = category;
  this.prep_time = prep_time;
  this.total_time = total_time;
}

// Question 3:

// Using the constructor you have written, create three Recipe objects
// and assign them to variables:

var grandmaRecipe = new Recipe("chocolate cake", "dessert", "2 hours", "12 hours");
  console.log(grandmaRecipe);

var tunaRecipe = new Recipe("Tuna Surprise Surprise", "casserole", "45 minutes", "45 minutes");
  console.log(tunaRecipe);

var coffeeRecipe = new Recipe("Ice Cold Coffee", "beverage", "10 minutes", "24 hours");
  console.log(coffeeRecipe);

// 1. Grandmother's Chocolate Cake, a dessert, which takes 2 hours of
//    preparation and 12 hours total time

// 2. Tuna Surprise Surprise, a casserole, which takes 45 minutes of
//    preparation and 45 minutes total time

// 3. Iced Cold-Brew Irish Coffee, a beverage, which takes 10 minutes of
//    preparation and 24 hours total time



// Question 4

  Recipe.prototype.getName = function() {
    return this.name;
  }

  Recipe.prototype.setName = function(newName) {
    return this.name = newName;
  }

  Recipe.prototype.getCategory = function() {
    return this.category;
  }

  Recipe.prototype.setCategory = function(newCategory) {
    return this.category = newCategory;
  }

  Recipe.prototype.getPrep_time = function() {
    return this.prep_time;
  }

  Recipe.prototype.setPrep_time = function(newPrep_time) {
    return this.prep_time = newPrep_time;
  }

  Recipe.prototype.getTotal_time = function() {
    return this.total_time;
  }

  Recipe.prototype.setTotal_time = function (newTotal_time) {
    return this.total_time = newTotal_time;
  }
// Add accessor functions for your recipes, with validation as
// described.  If the user passes in a value that is not valid, write
// a log message but do not change the object attributes.

// getRecipeName

// setRecipeName - once a recipe has a name, it cannot be set to the
// empty string.

// setRecipeCategory - the only acceptable recipe categories are given
// in the validRecipeCategory array.

var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];
