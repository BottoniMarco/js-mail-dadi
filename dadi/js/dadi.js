// valore dado giocatore
var giocatore = Math.floor(Math.random() * 6)+1;
console.log("giocatore " , giocatore);

// valore dado pc
var pc = Math.floor(Math.random() * 6)+1;
console.log("PC = " , pc);

// valore dado pc maggiore dado giocatore
if (pc > giocatore) {
  document.getElementById('vincitore').innerHTML = "Giocatore ha perso";
}
// valore dado pc minore dado giocatore
else if (pc < giocatore) {
  document.getElementById('vincitore').innerHTML = "Giocatore ha vinto";
}
// pareggio
else {
  document.getElementById('vincitore').innerHTML = "Pareggio";
}
