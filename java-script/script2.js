// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


var num1 = Math.floor((Math.random() * 6) + 1);

var num2 =  Math.floor((Math.random() * 6) + 1);

console.log(num2);
console.log(num1);


if ( num2 > num1){
    alert( "vince il banco")
} else if ( num2 < num1) {
    alert("hai vinto")
}else{
    alert("pareggio")
    
}
// Stabilire il vincitore, in base a chi fa il punteggio più alto. 