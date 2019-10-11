$(document).ready(function() {
  $(document).on("scroll", onScroll);
  // document.addEventListener("scroll", onScroll);
  let scrolling = true;
  // Trigger Click to go specific section or add active
  $('nav li a[href^="#"]').on("click", function(e) {
    // $(document).off("scroll");

    $("a").each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
});

function onScroll(event) {
  const scrollPosition = window.scrollY;
  $("nav .nav-link").each(function() {
    const currentLink = $(this);
    const refElement = $(currentLink.attr("href"));
    if (
      refElement.position().top <= scrollPosition &&
      refElement.position().top + refElement.height() > scrollPosition
    ) {
      currentLink.addClass("active");
    } else {
      currentLink.removeClass("active");
    }
  });
}
