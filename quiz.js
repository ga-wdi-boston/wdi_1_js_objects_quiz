// Quiz: Javascript Functions are First Class

// Question 1

// Identify three likely objects in
// the scenario.  Then choose one of the objects and identify three to
// five likely attributes and three to five likely methods for that
// object. Remember to consider implicit objects as well as
// explicit ones.

// Scenario: A user visits a library catalog to borrow a book for
// pleasure reading.  She searches for several books, finds one that
// she wishes to borrow immediately.  She also finds two books that
// have waiting lists, and adds herself to the waiting list for each
// book.

// three objects ---> User, Book, Waiting List
// Book Attributes--> Book Length, Book Type, Book Width
// Methods --> Calculate length, Calculate type of Book, Calculate Width of book


// Question 2

// You are writing a recipe database!  Write a constructor for a
// Recipe object that takes a recipe name, a recipe category, a recipe
// preparation time, and a recipe total time.

// Times are human-readable strings like "2 hours" "3 days" "15 minutes"

// (your code here)



var Recipe = function (nameR, cateR, prepR, totalR)


// Question 3:

// Using the constructor you have written, create three Recipe objects
// and assign them to variables:

// 1. Grandmother's Chocolate Cake, a dessert, which takes 2 hours of
//    preparation and 12 hours total time

// 2. Tuna Surprise Surprise, a casserole, which takes 45 minutes of
//    preparation and 45 minutes total time

// 3. Iced Cold-Brew Irish Coffee, a beverage, which takes 10 minutes of
//    preparation and 24 hours total time
var gChocCake = new Recipe("Grandmother's Chocolate Cake", "dessert", "2 hours", "12 hours");
var tSupSup = new Recipe("Tuna Surprise Surprise", "casserole", "45 min", "45 min");

var cRishCoffee = new Recipe("Iced Cold-Brew Irish Coffee", "beverage", "10 min", "24 hours");


// Question 4

// Add accessor functions for your recipes, with validation as
// described.  If the user passes in a value that is not valid, write
// a log message but do not change the object attributes.

// getRecipeName

// setRecipeName - once a recipe has a name, it cannot be set to the
// empty string.

// setRecipeCategory - the only acceptable recipe categories are given
// in the validRecipeCategory array.
var Recipe = function (nameR, cateR, prepR, totalR) {

  this.name = nameR;
  this.category = cateR;
  this.preptime = prepR;
  this.totaltime = totalR;

Recipe.prototype.getRecipeName = function() {return this.name;};
Recipe.prototype.setRecipeName = function(recipeName) { this.name = nameR;}
Recipe.prototype.setRecipeCategory = function(categoryName) {this.category = catR;}


var gChocCake = new Recipe("Grandmother's Chocolate Cake", "dessert", "2 hours", "12 hours");
var tSupSup = new Recipe("Tuna Surprise Surprise", "casserole", "45 min", "45 min");

var cRishCoffee = new Recipe("Iced Cold-Brew Irish Coffee", "beverage", "10 min", "24 hours");

}






var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];
