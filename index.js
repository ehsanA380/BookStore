$(window).on('load', function() {
  // setTimeout(removeLoader, 10); // Wait for page load PLUS two seconds
  removeLoader()
});

function removeLoader() {
  $(".loader-wrapper").fadeOut(500, function() {
    // Fade out complete. Remove the loading div
    $(".loader-wrapper").remove();
  });
}


$.get("/assets/html/loader.html", function(data) {
  $("#loading").replaceWith(data);
});
