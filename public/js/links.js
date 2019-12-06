$(document).ready(function() {
  var pathname = window.location.pathname;
  $(".nav-item")
    .find(".active")
    .removeClass("active");
  $(".nav-item").each(function() {
    if (
      $(this)
        .children("a.nav-link")
        .attr("href") === pathname
    ) {
      $(this).addClass("active");
    } else if (
      $(this).hasClass("dropdown") &&
      $(this)
        .children()
        .attr("href") === pathname
    ) {
      $(this).addClass("active");
    }
  });
});
