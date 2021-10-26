/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

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