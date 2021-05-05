// funzione per generare numeri casuali
function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1 + min));
}

// Chiedo all'Utente il livello
var livello = parseInt(prompt("Scegli un livello di difficoltà! 0 - 1 - 2"));

// Controllo se il numero inserito dall'Utente e compreso fra quelli richiesti
while (livello > 3 || isNaN(livello)) {
    alert("Devi inserire un numero 0 - 1 - 2")
    livello = parseInt(prompt("Scegli un livello di difficoltà! 0 - 1 - 2"));
}

// Assegno valori in base alla scelta alla variabile limite
var limite;

switch (livello) {

    case 1:
        // 80 numeri
        //numero = numeriCasuali (1, 80);
        limite = 80;
        break;

    case 2:
        // 50 numeri
        //numero = numeriCasuali (1, 50);
        limite = 50;
        break;

    default:
        // 100 numeri
        //numero = numeriCasuali (1, 100);
        limite = 100;
        break;
}

// array dove inserire i numeri generati
var bombe = [];

while (bombe.length < 16) {
    var numero = numeriCasuali(1, limite);

    if (!bombe.includes(numero)) {
        bombe.push(numero);
    }  
}

console.log(bombe);

// In seguito chiedo all'utente (limite - 16) volte di inserire un numero alla volta sempre compreso tra 1 e limite.
var numeriInseriti = [];

for (var i = 1; i <= (limite); i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero compreso tre 1 e " + limite));

    if (numeroUtente = NaN) {
        break;
    }

    console.log(numeroUtente);
    while (numeroUtente < 1 || numeroUtente > limite || isNaN(numeroUtente)) {
        alert("Devi inserire un numero tra uno e " + limite)
        numeroUtente = parseInt(prompt("Inserisci un numero compreso tre 1 e " + limite));
    }

    if ( !numeriInseriti.includes(numeroUtente)) {

        if(bombe.includes(numeroUtente)) {
            alert("Sei saltato su una mina! " + "Punteggio " + numeriInseriti.length);
            break;
        }
        numeriInseriti.push(numeroUtente);
    } else {
        alert("Hai già inserito il numero");
        
        i--
    }

}

// Comunico la vittoria
if (numeriInseriti.length == (limite - 16)) {

    alert("Hai vinto, punti totali " + numeriInseriti.length);
}




