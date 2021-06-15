var cards_list = ["ja.jpg", "mlody.jpg", "goska.jpg", "kinga.jpg", "janek.jpg", "wojtek.jpg", "ja.jpg", "mlody.jpg", "goska.jpg", "kinga.jpg", "janek.jpg", "wojtek.jpg"];
var cards = new Array();

for (i = 12; i > 0; i--) {
    var rand_id = Math.floor(Math.random() * i);
    cards.push(cards_list[rand_id]);
    cards_list.splice(rand_id, 1);
}

// console.log(cards);


var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });

c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });

c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });

var oneVisible = false;
var turnCounter = 0;
var visibleNumber;
var lock = false;
var pairsLeft = 6;

function revealCard(nr) {
    var opacityValue = $('#c' + nr).css('opacity');
    // alert("Opacity: " + opacityValue);
    if (opacityValue != 0 && lock == false && nr != visibleNumber) {

        lock = true;

        // alert(nr)
        var obraz = "url(img/" + cards[nr] + ")";
        $("#c" + nr).css('background-image', obraz);
        $("#c" + nr).toggleClass('cardA');

        if (oneVisible == false) {
            // first card
            oneVisible = true;
            visibleNumber = nr;
            lock = false;
        } else {
            //second card
            if (cards[visibleNumber] == cards[nr]) {
                // alert("działa");
                setTimeout(function () { hide2cards(nr, visibleNumber) }, 1000)

            } else {
                // alert("dupa");
                setTimeout(function () { restore2cards(nr, visibleNumber) }, 1000)

            }

            turnCounter++;
            $(".score").html('Ruchy: ' + turnCounter);
            oneVisible = false;
        }
    }

}
function hide2cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');

    pairsLeft--;
    if (pairsLeft == 0) {
        $('.board').html('Wygrałeś <br />zrobiłeś to w  ' + turnCounter + ' ruchach<br /><span class="reload" onclick="location.reload()">Zagraj jeszcze raz </span></h1>');
    }

    lock = false;
}

function restore2cards(nr1, nr2) {
    $("#c" + nr1).css('background-image', 'url(img/karta.jpg)');
    $("#c" + nr1).toggleClass('cardA');

    $("#c" + nr2).css('background-image', 'url(img/karta.jpg)');
    $("#c" + nr2).toggleClass('cardA');

    lock = false;
}