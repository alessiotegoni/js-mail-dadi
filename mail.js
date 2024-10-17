const allowedUsers = [
  "mario.rossi@gmail.com",
  "lucia.bianchi@yahoo.com",
  "andrea.verdi@hotmail.com",
  "sara.ferrari@outlook.com",
  "giovanni.martini@gmail.com",
  "luca.gallo@icloud.com",
  "marta.russo@yahoo.com",
  "giulia.fontana@live.com",
  "francesco.leone@aol.com",
  "alessia.pellegrini@gmail.com",
];

const userEmail = prompt("Inserisci la tua email");

allowedUsers.includes(userEmail)
  ? console.log("Sei autorizzato")
  : console.log("Non sei autorizzato");
