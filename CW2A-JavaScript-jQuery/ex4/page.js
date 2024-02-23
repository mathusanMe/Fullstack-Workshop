window.onload = function() {
    document.getElementById("afficher").onclick = function() {
        $("#list").slideToggle("slow");
        $("#afficher").text($("#afficher").text() === "Afficher" ? "Masquer" : "Afficher");
    };

    document.getElementById("bienvenue").onclick = function() {

        $("#bonjour").animate({marginLeft: "50%", opacity: "1"}, 5000, function() {
            $("#bonjour").animate({marginLeft: "100%", opacity: "0"}, 5000, function() {
                $("#bonjour").css("marginLeft", "0");
                $("#bonjour").css("opacity", "0");
            });
        });
    };
};