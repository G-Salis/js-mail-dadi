/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


//MAIL
let dbEmail = ['pippolino@mail.com', 'linopippo@mail.com'];
let myEmail = prompt("Scrivi l'email utilizzata durante la registrazione");
let registrazione = false;

for(let i = 0; i < dbEmail.length; i++){

  if(myEmail === dbEmail[i]){
    registrazione = true;
  }

}

if (registrazione == true) {
  alert("La tua mail è valida, puoi giocare");

}
else{
  alert("La tua mail non è valida, non puoi giocare"); 
}



//DADI
const playerDice = Math.floor(Math.random() * 5) + 1;
const pcDice = Math.floor(Math.random() * 5) + 1;

if(playerDice > pcDice){

  let risultato = `
  Tu hai scelto il numero ${playerDice}<br>
  il PC ha scelto il numero ${pcDice}.<br>
  <strong>HAI VINTO!</strong>

`
document.getElementById('output').innerHTML = risultato;


}else{

  let risultato = `
  Tu hai scelto il numero ${playerDice}<br>
  il PC ha scelto il numero ${pcDice}.<br>
  <strong>HAI PERSO!</strong>

`
document.getElementById('output').innerHTML = risultato;


}
