$(document).ready(function hasan() {
  $("#a").toggle(4000, function () {
    $("#b").toggle(4000, function () {
      $("#c").toggle(4000, function () {
        $("#d").toggle(4000, function () {
          $("#e").toggle(4000, function () {
            $("#f").toggle(2000, hasan());
          });
        });
      });
    });
  });
});
