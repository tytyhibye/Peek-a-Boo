$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hiding").toggle();
    $("#initially-shown").slideToggle();
    $("initially-hidden").toggle();
  });
});