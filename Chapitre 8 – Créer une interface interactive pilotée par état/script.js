let panier = []; // État : tableau des produits
let listePanier = document.getElementById("liste-panier");
let total = document.getElementById("total");

function afficherPanier() {
  listePanier.innerHTML = "";
  let somme = 0;

  panier.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.nom} – ${p.prix} €`;
    listePanier.appendChild(li);
    somme += p.prix;
  });

  total.textContent = `Total : ${somme} €`;
}

let boutons = document.querySelectorAll("button");
boutons.forEach(bouton => {
  bouton.addEventListener("click", function() {
    let produit = {
      nom: this.dataset.nom,
      prix: parseFloat(this.dataset.prix)
    };
    panier.push(produit);
    afficherPanier(); // Mettre à jour l'affichage après ajout
  });
});
