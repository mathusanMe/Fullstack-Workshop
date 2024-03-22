let nbr = 5;

$(document).ready (function () {
    $("#container").css("grid-template-columns", `repeat(${nbr}, 1fr)`);
    $(".photo").on('click', function () {
      $(".photo").css("opacity", "1");
      $(this).css("opacity", "0.5");
    });
});
