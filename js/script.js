/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const myCol = document.getElementById('mionumero');
const pcCol = document.getElementById('pcnumero');
const risCol = document.getElementById('ris');


//MAIL
let dbEmail = ['pippolino@mail.com', 'linopippo@mail.com'];
let myEmail = prompt("Scrivi l'email utilizzata durante la registrazione");
let registrazione = false;

for(let i = 0; i < dbEmail.length; i++){

  if(myEmail === dbEmail[i]){
    registrazione = true;
  }

}

const box = document.createElement("div");
  box.classList.add("box");
  myCol.append(box);
  pcCol.append(box);
  risCol.append(box);

if (registrazione == true) {
  alert("La tua mail è valida, puoi giocare");

  //DADI
const playerDice = Math.floor(Math.random() * 5) + 1;

myCol.append("il tuo numero è: ");
myCol.append(playerDice);
myCol.classList.add("box");


const pcDice = Math.floor(Math.random() * 5) + 1;

pcCol.append("il numero del pc è: ");
pcCol.append(pcDice);
pcCol.classList.add("box");

if(playerDice > pcDice){

  box.append("HAI VINTO!");
  box.classList.add("boxwin");

}else if(playerDice < pcDice){

  box.append("HAI PERSO!");
  box.classList.add("boxlose");

}else{

  box.append("PAREGGIO!");
  box.classList.add("box");

}


}
else{
  alert("La tua mail non è valida, non puoi giocare"); 
}

