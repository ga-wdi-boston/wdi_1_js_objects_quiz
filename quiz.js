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

// objects: library catalog, available books, wait-list books
// attributes: books by title, books by genre, books by author, recently added books, books  alphabetically
// methods: search for book by attribute, search by all books

// Question 2

// You are writing a recipe database!  Write a constructor for a
// Recipe object that takes a recipe name, a recipe category, a recipe
// preparation time, and a recipe total time.

// Times are human-readable strings like "2 hours" "3 days" "15 minutes"

var Recipe = function(recipeName, recipeCategory, recipePrepTime, recipeTotalTime) {
  this.name = recipeName;
  this.category = recipeCategory;
  this.prep = recipePrepTime;
  this.totalTime = recipeTotalTime;
};



// Question 3:

// Using the constructor you have written, create three Recipe objects
// and assign them to variables:

// 1. Grandmother's Chocolate Cake, a dessert, which takes 2 hours of
//    preparation and 12 hours total time

var grandmasRecipe = new Recipe ('Grandmothers Chocolate Cake', 'dessert', '2 hours', '12 hours');

console.log(grandmasRecipe);

// 2. Tuna Surprise Surprise, a casserole, which takes 45 minutes of
//    preparation and 45 minutes total time

var tunaRecipe = new Recipe ('Tuna Surprise Surprise', 'casserole', '45 minutes', '45 minutes');

console.log(tuneRecipe);
// 3. Iced Cold-Brew Irish Coffee, a beverage, which takes 10 minutes of
//    preparation and 24 hours total time

var icedRecipe = new Recipe ('Iced Cold-Brew Irish Coffee', 'beverage', '10 minutes', '24 hours')

// Question 4

// Add accessor functions for your recipes, with validation as
// described.  If the user passes in a value that is not valid, write
// a log message but do not change the object attributes.

// getRecipeName

// setRecipeName - once a recipe has a name, it cannot be set to the
// empty string.

// setRecipeCategory - the only acceptable recipe categories are given
// in the validRecipeCategory array.

Recipe.prototype.setRecipeName = function(newRecipeName) {
  this.name = newName;
}

Recipe.prototype.getRecipeName = function() {
  return this.name;
}

Recipe.prototype.setRecipeCategory = function(newRecipeCategory) {
  var acceptableCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];

    if (acceptableCategories !== -1) {
      this.category = newRecipeCategory;
    }

    else {
      console.log("This is not an acceptable category");
    }
};

var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];
