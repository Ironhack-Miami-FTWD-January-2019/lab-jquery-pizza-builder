// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  defaultValues();
});

btnHandler(".btn-pepperonni", ".pep");
btnHandler(".btn-mushrooms", ".mushroom");
btnHandler(".btn-green-peppers", ".green-pepper");
btnHandler(".btn-crust", ".crust", "crust-gluten-free");
btnHandler(".btn-sauce", ".sauce", "sauce-white");

function defaultValues () {
  $(".crust").removeClass("crust-gluten-free");
  $(".crust").find(".sauce").removeClass("sauce-white");
  $(".btn-pepperonni, .btn-mushrooms, .btn-green-peppers").addClass("active");
  $(".btn-crust, .btn-sauce").removeClass("active");
}

function btnHandler(triggerClass, targetClass, toggleClass) {
  if (toggleClass) {
    $(triggerClass).on("click", function() {
      $(targetClass).toggleClass(toggleClass);
      changeButtonStyle($(this));
    });
  } else {
    $(triggerClass).on("click", function() {
      $(targetClass).toggle();
      changeButtonStyle($(this));
    });
  }
}

function changeButtonStyle(button) {
  $(button).toggleClass("active");
}
