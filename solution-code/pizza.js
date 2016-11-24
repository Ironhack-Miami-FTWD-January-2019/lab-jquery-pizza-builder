// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  defaultValues();
});

var prices = {
  "peppperonni": 1,
  "mushroom": 1,
  "green-pepper": 1,
  "sauce": 3,
  "crust": 5
};

btnHandler(".btn-pepperonni", ".pepperonni");
btnHandler(".btn-mushrooms", ".mushroom");
btnHandler(".btn-green-peppers", ".green-pepper");
btnHandler(".btn-crust", ".crust", "crust-gluten-free");
btnHandler(".btn-sauce", ".sauce", "sauce-white");

function defaultValues () {
  // Ingredients
  $(".crust").removeClass("crust-gluten-free");
  $(".crust").find(".sauce").removeClass("sauce-white");

  // Buttons state
  $(".btn-pepperonni, .btn-mushrooms, .btn-green-peppers").addClass("active");
  $(".btn-crust, .btn-sauce").removeClass("active");

  // Ingredients list
  $(".panel.price").find("ul").find("li:contains('sauce')").toggle();
  $(".panel.price").find("ul").find("li:contains('crust')").toggle();
}

function btnHandler(triggerClass, targetClass, toggleClass) {
  $(triggerClass).on("click", function() {
    toggleClass ? $(targetClass).toggleClass(toggleClass) : $(targetClass).toggle();
    changeButtonStyle($(this));
    updateIngredientsList(targetClass);
    // updatePrice($(this), targetClass);
  });
}

function changeButtonStyle(button) {
  $(button).toggleClass("active");
}

function updateIngredientsList(ingredient) {
  ingredient = ingredient.replace(".", "");
  var element = $(".panel.price").find("ul").find("li:contains('" + ingredient + "')");
  element.toggle();
}

// function updatePrice(button, ingredient) {
//   ingredient = ingredient.replace(".", "");
//   price      = prices[ingredient];
//
//   if ($(button).hasClass("active")) {
//     price *= -1;
//   }
//
//   updateTotal(price);
// }
//
// function updateTotal (price) {
//
// }
