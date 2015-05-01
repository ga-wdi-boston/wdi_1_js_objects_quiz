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

// Objects:
//   1) LibraryMember
//   2) Catalog
//   3) Book

// Attributes:
//   LibraryMember-
//     1) currentlyCheckedOut
//     2) currentlyWaiting
//     3) duesOwed
//     4) address
//     5) libraryCardNumber

// Methods:
//   1) checkOutBook(book)
//   2) turnedInBook(book)
//   3) changeOfAddress(newAddress)
//   4) notifyOutstandingLateFees
//   5) sendDueDateReminder


// Question 2

// You are writing a recipe database!  Write a constructor for a
// Recipe object that takes a recipe name, a recipe category, a recipe
// preparation time, and a recipe total time.

// Times are human-readable strings like "2 hours" "3 days" "15 minutes"

// (your code here)
var Recipe = function(name, category, preparationTime, totalTime){
  this.name = name;
  this.prepTime = preparationTime;
  this.totalTime = totalTime
}



// Question 3:

// Using the constructor you have written, create three Recipe objects
// and assign them to variables:

// 1. Grandmother's Chocolate Cake, a dessert, which takes 2 hours of
//    preparation and 12 hours total time

var grandmaChocoCake = new Recipe("Grandmother's Chocolate Cake", 'dessert', '2 hours', '12 hours');

// 2. Tuna Surprise Surprise, a casserole, which takes 45 minutes of
//    preparation and 45 minutes total time

var tunasurprise = new Recipe('Tuna Surprise Surprise', 'casserole', '45 minutes', '45 minutes');

// 3. Iced Cold-Brew Irish Coffee, a beverage, which takes 10 minutes of
//    preparation and 24 hours total time
var irishCoffee = new Recipe('Iced Cold-Brew Irish Coffee', 'beverage', '10 minutes', '24 hours');


// Question 4

// Add accessor functions for your recipes, with validation as
// described.  If the user passes in a value that is not valid, write
// a log message but do not change the object attributes.

Recipe.prototype.getRecipeName = function(){
  return this.name;
}

// setRecipeName - once a recipe has a name, it cannot be set to the
// empty string.

Recipe.prototype.setRecipeName = function(newName) {
  if(newName !== undefined){
    this.name = newName;
  } else {
    console.log('You entered an invalid name');
  }
};

// setRecipeCategory - the only acceptable recipe categories are given
// in the validRecipeCategory array.

Recipe.prototype.setRecipeCategory = function(newCategory) {
  if(validRecipeCategories.indexOf(newCategory) >= 0){
      this.category = newCategory;
    } else {
      console.log('You entered an invalid categoryf');
    }
};

var validRecipeCategories = ['none', 'dessert', 'casserole',
    'salad', 'beverage', 'appetizer', 'main course', 'snack'];
