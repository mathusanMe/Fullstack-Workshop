window.onload = function() {
    let cnt = 0;
    let x = 0;
    let y = 0;
    // let mouseDown = false;

    document.getElementById("container").onmouseover = function() {
        console.log("Attention, vous entrez dans la zone rouge");
    };
    document.getElementById("container").onmousedown = function() {
        cnt++;
        x++;
        // mouseDown = true;
        $(this).css("border-color", "green");
        $("header").append(`<p class=\"up\">up ${cnt}</p>`);
        $(".up").last().css("color", "green");
    };

    document.getElementById("container").onmouseup = function() {
        y++;
        $(this).css("border-color", "red");
        $("footer").append(`<p class=\"down\">down ${cnt}</p>`);
        $(".down").last().css("color", "red");
    };

    // Pour le bonus
    // document.onmouseup = function() {
    //     if (!mouseDown) return;
    //     y++;
    //     $(this).css("border-color", "red");
    //     $("footer").append(`<p class=\"down\">down ${cnt}</p>`);
    //     $(".down").last().css("color", "red");
    //     mouseDown = false;
    // };

    $("body").on("click", ".up", function() {
        $(this).hide();
        x--;
    });

    $("body").on("click", ".down", function() {
        $(this).hide();
        y--;
    });

    document.getElementById("decompte").onmouseout = function() {
        $(this).text(`Cliquez ici - Decompte (${x},${y})`)
    };
};