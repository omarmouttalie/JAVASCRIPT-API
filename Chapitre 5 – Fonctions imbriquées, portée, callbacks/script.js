function addition(a, b, callback) {
  let somme = a + b;
  // On exécute le callback avec un délai de 1 seconde
  setTimeout(() => {
    callback(somme);
  }, 1000);
}

addition(5, 7, function(resultat) {
  console.log("La somme après 1 seconde est : " + resultat);
});
