$(document).ready(function () {

  $("#button").click(function () {
    document.getElementById("button").classList.add("button");
  });

  $(".header__bar-btn").click(function () {
    document.getElementById("header__bar").classList.toggle("display-block");
  });

  $(".header__bar--close-mobile").click(function () {
    document.getElementById("header__bar").classList.toggle("display-block");
  });

});