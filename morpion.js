/**
 * From CodePen
 * https://codepen.io/jreaux62/pen/LyWaqE
 * Author: @jreaux62
 * Update script with Reset function
 */
var url = 'http://konexio.local';
var reset = document.getElementById("reset");

function estValide(button) {
    return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, tour) {
    if (
            pions[0].innerHTML == joueurs[tour] &&
            pions[1].innerHTML == joueurs[tour] &&
            pions[2].innerHTML == joueurs[tour]
            ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[1].style.backgroundColor = "#9ACD32";
        pions[2].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[3].innerHTML == joueurs[tour] &&
            pions[4].innerHTML == joueurs[tour] &&
            pions[5].innerHTML == joueurs[tour]
            ) {
        pions[3].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[6].innerHTML == joueurs[tour] &&
            pions[7].innerHTML == joueurs[tour] &&
            pions[8].innerHTML == joueurs[tour]
            ) {
        pions[6].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[0].innerHTML == joueurs[tour] &&
            pions[3].innerHTML == joueurs[tour] &&
            pions[6].innerHTML == joueurs[tour]
            ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[3].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[1].innerHTML == joueurs[tour] &&
            pions[4].innerHTML == joueurs[tour] &&
            pions[7].innerHTML == joueurs[tour]
            ) {
        pions[1].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[2].innerHTML == joueurs[tour] &&
            pions[5].innerHTML == joueurs[tour] &&
            pions[8].innerHTML == joueurs[tour]
            ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[0].innerHTML == joueurs[tour] &&
            pions[4].innerHTML == joueurs[tour] &&
            pions[8].innerHTML == joueurs[tour]
            ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
            pions[2].innerHTML == joueurs[tour] &&
            pions[4].innerHTML == joueurs[tour] &&
            pions[6].innerHTML == joueurs[tour]
            ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }
}

function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0)
            return false;
    }
    return true;
}

var Afficheur = function (element) {
    var affichage = element;
    function setText(message) {
        affichage.innerHTML = message;
    }
    return {sendMessage: setText};
};

function main() {
    var reset = document.getElementById("reset");
    var pions = document.querySelectorAll(".btn-game");
    var joueurs = ["X", "O"];
    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
            "Le jeu peut commencer ! <br /> Joueur " +
            joueurs[tour] +
            " c'est votre tour."
            );
    for (var i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function () {
            if (jeuEstFini) {
                return;
            }
            if (!estValide(this)) {
                afficheur.sendMessage(
                        "Case occupée ! <br />Joueur " + joueurs[tour] +
                        " c'est toujours à vous !"
                        );
            } else {
                setSymbol(this, joueurs[tour]);
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

                if (jeuEstFini) {
                    reset.classList.remove("hidden");
                    afficheur.sendMessage(
                            "Le joueur " + joueurs[tour] + ' a gagné ! <br />'
                            );
                    return;
                }
                if (matchNul(pions)) {
                    reset.classList.remove("hidden");
                    afficheur.sendMessage(
                            'Match Nul ! <br/>'
                            );
                    return;
                }
                tour++;
                tour = tour % 2;
                afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
            }
        });
    }
}

main();

reset.onclick = function () {
    reset.parentNode.children[0].classList.add('hidden');
    const buttons = document.getElementsByClassName('btn-game');
    for (var i = 0; i <buttons.length; i++ ) {
        setSymbol(buttons[i],null);
        buttons[i].setAttribute('style','');
        main();
    }
}