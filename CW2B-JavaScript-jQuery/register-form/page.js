window.onload = function() {
    let etat_civil_elmt = document.getElementById("etat-civil");
    let nom_elmt = document.getElementById("nom");
    let prenom_elmt = document.getElementById("prenom");
    let nom_complet_elmt = document.getElementById("nom-complet");

    $("#nom").keyup(updateNomComplet);
    $("#prenom").keyup(updateNomComplet);
    $("#etat-civil").change(updateNomComplet);

    function updateNomComplet() {
        let nom = nom_elmt.value;
        let prenom = prenom_elmt.value;
        let etat_civil = etat_civil_elmt.value;
        
        nom_complet_elmt.value = etat_civil + " " + nom + " " + prenom;
    }

    $("#niveau-en-javascript").mousemove(function() {
        let niveau = $(this).val();
        let niveau_label = "Niveau en Javascript" + " (" + niveau + ")";
        $("#niveau-en-javascript-label").text(niveau_label);
    });

    $("#show-mdp").change(function() {
        if ($("#mdp").attr("type") === "text") {
            $("#mdp").attr("type", "password");
            $("#confirm-mdp").attr("type", "password");
        } else {
            $("#mdp").attr("type", "text");
            $("#confirm-mdp").attr("type", "text");
        }
    });

    $("button[type=submit]").attr("disabled", "disabled");

    $("input").keyup(function() {
        let nom = $("#nom").val();
        let prenom = $("#prenom").val();
        let date = $("#date-de-naissance").val();
        let mdp = $("#mdp").val();
        let confirm_mdp = $("#confirm-mdp").val();

        if (nom !== "") {
            $("#nom").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }

        if (prenom !== "") {
            $("#prenom").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }

        if (date !== "") {
            $("#date-de-naissance").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }

        if (mdp !== "") {
            $("#mdp").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }

        if (confirm_mdp !== "") {
            $("#confirm-mdp").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }
        
        if (mdp !== confirm_mdp) {
            $("#mdp").css("border", "");
            $("#confirm-mdp").css("border", "");
            $("button[type=submit]").attr("disabled", "disabled");
        }

        if (nom !== "" && prenom !== "" && mdp !== "" && confirm_mdp !== "" && date !== "" && mdp === confirm_mdp) {
            $("button[type=submit]").removeAttr("disabled");
        } else {
            $("button[type=submit]").attr("disabled", "disabled");

            if (nom === "") {
                $("#nom").css("border", "2px solid red");
            }

            if (prenom === "") {
                $("#prenom").css("border", "2px solid red");
            }

            if (date === "") {
                $("#date-de-naissance").css("border", "2px solid red");
            }

            if (mdp === "") {
                $("#mdp").css("border", "2px solid red");
            }

            if (confirm_mdp === "") {
                $("#confirm-mdp").css("border", "2px solid red");
            }

            if (mdp !== confirm_mdp) {
                $("#mdp").css("border", "2px solid red");
                $("#confirm-mdp").css("border", "2px solid red");
            }
        }
    });

    let date = new Date();
    var oneHundredYearsAgo = new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
    $("#date-de-naissance").attr("max", date.toISOString().split('T')[0]);
    $("#date-de-naissance").attr("min", oneHundredYearsAgo.toISOString().split('T')[0]);

    $("button[type=submit]").click(function() {
        $(".container").html(" \
            <h1>Bonjour " + $("#nom-complet").val() + "</h1> \
            <p>Vous êtes né le " + $("#date-de-naissance").val() + "</p> \
        ");
    });
};