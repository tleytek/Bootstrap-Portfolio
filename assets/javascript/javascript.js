$(document).ready(function() {
  $("#aboutMeButton").click(function() {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#aboutMe").offset().top
      },
      "slow"
    );
  });
});
