let utilisateur = {
  nom: "Sara",
  adresse: {
    ville: "Rabat",
    codePostal: 10000
  },
  achats: [
    { nom: "PC portable", prix: 900 },
    { nom: "Souris", prix: 20 },
    { nom: "Clavier", prix: 40 }
  ]
};

let liste = document.getElementById("liste-produits");

// Parcourir les achats
utilisateur.achats.forEach(item => {
  let li = document.createElement("li");
  li.textContent = `${item.nom} - ${item.prix} €`;
  liste.appendChild(li);
});

// Mise à jour d'un prix
utilisateur.achats[0].prix = 850;
console.log("Nouveau prix du PC :", utilisateur.achats[0].prix);
