$(document).ready(function() {
  $(document).on("click", ".build-table td a", function(event) {
    window.setTimeout(function() { document.location.hash = "donate" }, 1200);
  });
});
