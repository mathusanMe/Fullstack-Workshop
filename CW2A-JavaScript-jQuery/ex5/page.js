window.onload = function() {
    let length = $("#defile").find("img").length;

    function next(selection, length) {
        if (selection < length - 1) {
            return selection + 1;
        } else {
            return 0;
        }
    }
    
    selection = 0;
    document.getElementById("suivant").onclick = function() {
        next_selection = next(selection, length);
        $("#defile").find("img").eq(selection).css("display", "none");
        $("#defile").find("img").eq(next_selection).css("display", "block");
        selection = next_selection;
    };

    $("#suivant").css("display", "none");

    // const interval = setInterval(function() {
    //     next_selection = next(selection, length);
    //     $("#defile").find("img").eq(selection).fadeOut(500);
    //     $("#defile").find("img").eq(next_selection).delay(500).fadeIn(1200);
    //     selection = next_selection;
    // }, 2000);

    // const interval = setInterval(function() {
    //     next_selection = next(selection, length);
    //     $("#defile").find("img").eq(selection).slideUp(500);
    //     $("#defile").find("img").eq(next_selection).delay(500).slideDown(1200);
    //     selection = next_selection;
    // }, 2000);

    $("#defile").find("img").eq(selection).css("display", "block");

    const interval = setInterval(function() {
        next_selection = next(selection, length);
        $("#defile").find("img").eq(selection).animate({marginLeft: "0", opacity: "0"}, 1000, function() {
            $("#defile").find("img").eq(selection).css("display", "none");
            $("#defile").find("img").eq(next_selection).css("display", "block");
            $("#defile").find("img").eq(next_selection).css("opacity", "0");
            $("#defile").find("img").eq(next_selection).css("marginLeft", "100%");
            $("#defile").find("img").eq(next_selection).animate({marginLeft: "50%", opacity: "1"}, 1000);
        });
        selection = next_selection;
    }, 2000);
};