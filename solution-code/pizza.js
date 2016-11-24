// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".crust").find(".sauce").removeClass("sauce-white");
});

function btnHandler(triggerClass, targetClass, toggleClass) {
  if (toggleClass) {
    $(triggerClass).on("click", function() {
      $(targetClass).toggleClass(toggleClass);
    });
  } else {
    $(triggerClass).on("click", function() {
      $(targetClass).toggle();
    });
  }
}

btnHandler(".btn-pepperonni", ".pep");
btnHandler(".btn-mushrooms", ".mushroom");
btnHandler(".btn-green-peppers", ".green-pepper");
btnHandler(".btn-crust", ".crust", "crust-gluten-free");
btnHandler(".btn-sauce", ".sauce", "sauce-white");
