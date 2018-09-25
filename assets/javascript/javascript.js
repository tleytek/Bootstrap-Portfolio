$(document).ready(function() {
  $("#aboutMeButton").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#aboutMe").offset().top
      },
      800
    );
  });
});
