// lista indirizzi email
var indirizzi = ["a@gmail.com","b@gmail.com","c@gmail.com","d@gmail.com","e@gmail.com","f@gmail.com"];

// email utente inserita
var email_utente = prompt("inserisci email");

// variabile trigger
var trovata = "";

// ciclo che confronta l'email inserita con le email nella lista
for (var i = 0; i < indirizzi.length; i++) {
  if (indirizzi[i] == email_utente) {
    trovata = "in_lista";
    console.log(trovata);
  }
}

// email presente nella lista
if (trovata != "") {
  alert("Grazie per l'Email");
  document.getElementById('email').innerHTML = "L'indirizzo inserito è stato accettato"
}

// email NON presente nella lista

else {
  alert("Email non trovata");
    document.getElementById('email').innerHTML = "Inserire indirizzo Email valido";
}
