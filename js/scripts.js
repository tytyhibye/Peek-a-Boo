$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hiding").toggle();
  });
  $(".clickypoo").click(function() {
    $("#initially-shown").slideToggle();
    $("initially-hidden").toggle();
  })
});