// creo lista email che hanno accesso
var listaemail;
listaemail=["miaemaillibero.it","miaemailgmail.it","miaemailgmail.com","miaemailhotmail.it","miaemailhotmail.com"]
console.log(listaemail);
//chiedo a utente di inserire la sua email

var emailutente;
emailutente=prompt("inserisci la tua email");
console.log(emailutente);

//leggo i valori contenuti nell'array listaemail e controllo se è presente quella inserita dall'utente
for(var i=0; i < listaemail.length; i++){
  console.log(listaemail[i]);
  if (listaemail[i] === emailutente){
    alert("sei stato invitato");
  }
}
