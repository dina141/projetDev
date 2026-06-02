var tousProduits = [
    {
        "id": 1,
        "nom": "Cheval Bleu   de Franz Marc",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "cheval bleu de franz marc.jpg"
    },
    {
        "id": 2,
        "nom": "Le Baiser (Der Kuss) de Gustav Klimt",
        "categorie": "Tableaux Célèbres",
        "prix": 8500,
        "description": "Toile de 50/70 cm.",
        "image": "thm_1-der-kuss-detail.jpg"
    },
    {
        "id": 3,
        "nom": "Dame Avec l'Hermione   de Leonard de Vinci",
        "categorie": "Tableaux Célèbres",
        "prix": 3000,
        "description": "Toile 80/100 cm.",
        "image": "dame avec l'hermione de leonard de vinci.jpg"
    },
    {
        "id": 4,
        "nom": "Femme avec Ombrelle  de Claude Monet",
        "categorie": "Tableaux Célèbres",
        "prix": 6200,
        "description": "",
        "image": "femme avec ombrelle de claude monet.jpg"
    },
    {
        "id": 5,
        "nom": "Jeune Fille Lisant de Jean-Honoré Fragonard",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "jeune fille lisant de jean honore fragonard.jpg"
    },
    {
        "id": 6,
        "nom": "L'Arbre de Vie de Gustav Klimt",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "l'arbre de vie de gustav klimt.jpg"
    },
    {
        "id": 7,
        "nom": "La Vague de Katsushika Hokusai",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "la vague de katsushika hokusai.jpg"
    },
    {
        "id": 8,
        "nom": "Le cri d'Edvard Munch",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "le cri de edvard munch.jpg"
    },
    {
        "id": 9,
        "nom": "Le Voyageur Contemplant une Mer de Nuages de Casper David Friedrich",
        "categorie": "Tableaux Célèbres",
        "prix": 10000,
        "description": "Toile de 80/100 cm.",
        "image": "le voyageur contemplant de casper david friedrich.jpg"
    },
    {
        "id": 10,
        "nom": "Les Petits éplucheurs de Pommes de Terre d'Albert Anker",
        "categorie": "Tableaux Célèbres",
        "prix": 8500,
        "description": "Toile de 80/100 cm.",
        "image": "les petits eplucheurs de albert anker.jpg"
    },
    {
        "id": 11,
        "nom": "Ligne Ondulée de Vassily Kandinsky",
        "categorie": "Tableaux Célèbres",
        "prix": 6500,
        "description": "Toile de 80/100 cm.",
        "image": "ligne ondulee de vassily kandinsky.jpg"
    },
    {
        "id": 12,
        "nom": "La Joconde de Leonard de Vinci",
        "categorie": "Tableaux Célèbres",
        "prix": 9500,
        "description": "Toile de 80/100 cm.",
        "image": "Mona_Lisa.jpg"
    },
    {
        "id": 13,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 6500,
        "description": "",
        "image": "couleurs.avif"
    },
    {
        "id": 14,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 10000,
        "description": "",
        "image": "paysage.jpg"
    },
    {
        "id": 15,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 7500,
        "description": "",
        "image": "chat.jpg"
    },
    {
        "id": 16,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 5500,
        "description": "",
        "image": "cercles.jpg"
    },
    {
        "id": 17,
        "nom": "Composition Sans But  de Vassily Kandinsky",
        "categorie": "Tableaux Célèbres",
        "prix": 8500,
        "description": "Toile de 50/70 cm.",
        "image": "composition sans but de vassily kandinsky.jpg"
    },
    {
        "id": 18,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 5500,
        "description": "",
        "image": "africaine.webp"
    },
    {
        "id": 19,
        "nom": "",
        "categorie": "Œuvres Originales",
        "prix": 5500,
        "description": "",
        "image": "elephant.jpg"
    }

];

// 2 - la liste des utilisateurs pour tester la connexion
var utilisateurs = [
    { email: "client@email.com", motDePasse: "Client123!", nom: "Client Test" },
    { email: "djouber@ummto.dz", motDePasse: "Dina2025!", nom: "Djouber Dina" },
    { email: "aziz@ummto.dz", motDePasse: "Aziz2025!", nom: "Aziz Douniazed" }
    
    
];

// 3 - fonction pour avoir le bon chemin des images (vu qu'on a des pages dans le dossier content)
// Selon la page (root ou content/), le chemin vers images/ change
function cheminImage(nomImage) {
    if (window.location.pathname.includes('/content/')) {
        return '../images/' + nomImage;
    }
    return 'images/' + nomImage;
}

// 4 - gestion de la session avec localStorage

// Vérifie si un utilisateur est connecté et met à jour l'affichage
function verifierSession() {
    var nomUtilisateur = localStorage.getItem('utilisateurConnecte');
    var navSession = document.getElementById('nav-session');

    if (nomUtilisateur && navSession) {
        navSession.innerHTML =
            '<span class="utilisateur-connecte">👤 ' + nomUtilisateur + '</span>' +
            '<button onclick="deconnexion()" class="btn-deconnexion">Déconnexion</button>';
    }
}

// Déconnexion : supprime les données et recharge la page
function deconnexion() {
    localStorage.removeItem('utilisateurConnecte');
    localStorage.removeItem('emailConnecte');
    window.location.reload();
}

// 5 - validation de la page de connexion
function validerConnexion(event) {
    event.preventDefault();

    var email = document.getElementById('email-connexion').value.trim();
    var motDePasse = document.getElementById('mdp-connexion').value;
    var messageDiv = document.getElementById('message-connexion');

    // RegEx pour valider le format email
    var regexEmail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if (!regexEmail.test(email)) {
        messageDiv.textContent = "⚠️ Le format de l'email est invalide.";
        messageDiv.className = "message erreur";
        return;
    }

    if (motDePasse.length === 0) {
        messageDiv.textContent = "⚠️ Veuillez entrer votre mot de passe.";
        messageDiv.className = "message erreur";
        return;
    }

    // Chercher l'utilisateur dans la liste
    var utilisateur = utilisateurs.find(function(u) {
        return u.email === email && u.motDePasse === motDePasse;
    });

    if (utilisateur) {
        localStorage.setItem('utilisateurConnecte', utilisateur.nom);
        localStorage.setItem('emailConnecte', utilisateur.email);
        messageDiv.textContent = "✅ Connexion réussie ! Bienvenue " + utilisateur.nom;
        messageDiv.className = "message succes";
        setTimeout(function() { verifierSession(); }, 1500);
    } else {
        messageDiv.textContent = "❌ Email ou mot de passe incorrect.";
        messageDiv.className = "message erreur";
    }
}

// 6 - validation du formulaire d'inscription
function validerInscription(event) {
    event.preventDefault();

    var nom = document.getElementById('nom').value.trim();
    var prenom = document.getElementById('prenom').value.trim();
    var email = document.getElementById('email-inscription').value.trim();
    var mdp = document.getElementById('mdp-inscription').value;
    var mdpConfirm = document.getElementById('mdp-confirmation').value;
    var messageDiv = document.getElementById('message-inscription');

    // Expressions régulières
    var regexNom = /^[a-zA-ZÀ-ÿ\s-]{2,30}$/;
    var regexEmail =  /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    var regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!regexNom.test(nom)) {
        messageDiv.textContent = "⚠️ Le nom doit contenir entre 2 et 30 caractères alphabétiques.";
        messageDiv.className = "message erreur";
        return;
    }
    if (!regexNom.test(prenom)) {
        messageDiv.textContent = "⚠️ Le prénom doit contenir entre 2 et 30 caractères alphabétiques.";
        messageDiv.className = "message erreur";
        return;
    }
    if (!regexEmail.test(email)) {
        messageDiv.textContent = "⚠️ Le format de l'email est invalide.";
        messageDiv.className = "message erreur";
        return;
    }
    if (!regexMdp.test(mdp)) {
        messageDiv.textContent = "⚠️ Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
        messageDiv.className = "message erreur";
        return;
    }
    if (mdp !== mdpConfirm) {
        messageDiv.textContent = "⚠️ Les mots de passe ne correspondent pas.";
        messageDiv.className = "message erreur";
        return;
    }
    if (utilisateurs.find(function(u) { return u.email === email; })) {
        messageDiv.textContent = "⚠️ Cet email est déjà utilisé.";
        messageDiv.className = "message erreur";
        return;
    }

    // Inscription réussie (simulation)
    utilisateurs.push({ email: email, motDePasse: mdp, nom: nom + " " + prenom });
    messageDiv.textContent = "✅ Inscription réussie ! Vous pouvez maintenant vous connecter.";
    messageDiv.className = "message succes";
    document.getElementById('formulaire-inscription').reset();
}

// 7 - fonction pour charger et afficher les produits
function chargerProduits() {
    afficherProduits(tousProduits);
    genererCategories(tousProduits);
}

// Crée les cartes produit dans la grille
function afficherProduits(produits) {
    var grille = document.getElementById('grille-produits');
    if (!grille) return;

    if (produits.length === 0) {
        grille.innerHTML = '<p class="aucun-produit">Aucun produit trouvé dans cette catégorie.</p>';
        return;
    }

    var html = '';
    for (var i = 0; i < produits.length; i++) {
        var p = produits[i];
        var imgSrc = cheminImage(p.image);
        var placeholderSrc = cheminImage('placeholder.svg');
        html += '<article class="carte-produit">';
        html += '  <div class="image-produit">';
        html += '    <img src="' + imgSrc + '" alt="' + p.nom + '" onerror="this.onerror=null; this.src=\'' + placeholderSrc + '\';">';
        html += '    <span class="badge-categorie">' + p.categorie + '</span>';
        html += '  </div>';
        html += '  <div class="info-produit">';
        html += '    <h3>' + p.nom + '</h3>';
        html += '    <p class="description-produit">' + p.description + '</p>';
        html += '    <div class="bas-carte">';
        html += '      <span class="prix">' + p.prix.toLocaleString('fr-DZ') + ' DA</span>';
        html += '      <button class="btn-ajouter" onclick="ajouterAuPanier(' + p.id + ')">🛒 Ajouter</button>';
        html += '    </div>';
        html += '  </div>';
        html += '</article>';
    }
    grille.innerHTML = html;
}

// 8 - les filtres par catégorie
function genererCategories(produits) {
    var conteneur = document.getElementById('filtres-categorie');
    if (!conteneur) return;

    var categoriesSet = new Set();
    for (var i = 0; i < produits.length; i++) {
        categoriesSet.add(produits[i].categorie);
    }

    var html = '<button class="btn-filtre actif" onclick="filtrerParCategorie(\'tous\', this)">Tous</button>';
    categoriesSet.forEach(function(cat) {
        html += '<button class="btn-filtre" onclick="filtrerParCategorie(\'' + cat + '\', this)">' + cat + '</button>';
    });
    conteneur.innerHTML = html;
}

function filtrerParCategorie(categorie, bouton) {
    var boutons = document.querySelectorAll('.btn-filtre');
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove('actif');
    }
    bouton.classList.add('actif');

    if (categorie === 'tous') {
        afficherProduits(tousProduits);
    } else {
        var filtres = tousProduits.filter(function(p) {
            return p.categorie === categorie;
        });
        afficherProduits(filtres);
    }
}

// 9 - gestion du panier (avec le localStorage)
var panier = JSON.parse(localStorage.getItem('panier')) || [];

function ajouterAuPanier(idProduit) {
    var produit = tousProduits.find(function(p) { return p.id === idProduit; });
    if (!produit) return;

    var existant = panier.find(function(item) { return item.id === idProduit; });
    if (existant) {
        existant.quantite++;
    } else {
        panier.push({ id: produit.id, nom: produit.nom, prix: produit.prix, quantite: 1 });
    }

    localStorage.setItem('panier', JSON.stringify(panier));
    mettreAJourCompteurPanier();
    afficherNotification(produit.nom + ' ajouté au panier !');
}

function afficherNotification(texte) {
    var notif = document.createElement('div');
    notif.className = 'notification-panier';
    notif.textContent = '🛒 ' + texte;
    document.body.appendChild(notif);
    setTimeout(function() { notif.remove(); }, 3000);
}

function mettreAJourCompteurPanier() {
    var compteur = document.getElementById('compteur-panier');
    if (compteur) {
        var total = 0;
        for (var i = 0; i < panier.length; i++) total += panier[i].quantite;
        compteur.textContent = total;
        compteur.style.display = total > 0 ? 'inline-flex' : 'none';
    }
}

// 10 - page de commande (afficher la liste et valider)
function afficherPanier() {
    var conteneur = document.getElementById('contenu-panier');
    if (!conteneur) return;

    panier = JSON.parse(localStorage.getItem('panier')) || [];

    if (panier.length === 0) {
        conteneur.innerHTML = '<p class="panier-vide">🛒 Votre panier est vide.</p>';
        document.getElementById('total-commande').textContent = '0 DA';
        return;
    }

    var html = '';
    var total = 0;
    for (var i = 0; i < panier.length; i++) {
        var item = panier[i];
        var sousTotal = item.prix * item.quantite;
        total += sousTotal;
        html += '<div class="item-panier">';
        html += '  <div class="info-item"><h4>' + item.nom + '</h4>';
        html += '  <p>' + item.prix.toLocaleString('fr-DZ') + ' DA × ' + item.quantite + '</p></div>';
        html += '  <div class="actions-item">';
        html += '    <span class="sous-total">' + sousTotal.toLocaleString('fr-DZ') + ' DA</span>';
        html += '    <button class="btn-supprimer" onclick="supprimerDuPanier(' + item.id + ')">✕</button>';
        html += '  </div>';
        html += '</div>';
    }
    conteneur.innerHTML = html;
    document.getElementById('total-commande').textContent = total.toLocaleString('fr-DZ') + ' DA';
}

function supprimerDuPanier(idProduit) {
    panier = panier.filter(function(item) { return item.id !== idProduit; });
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
    mettreAJourCompteurPanier();
}

function validerCommande(event) {
    event.preventDefault();
    var messageDiv = document.getElementById('message-commande');

    if (!localStorage.getItem('utilisateurConnecte')) {
        messageDiv.textContent = "⚠️ Veuillez vous connecter avant de passer une commande.";
        messageDiv.className = "message erreur";
        return;
    }
    if (panier.length === 0) {
        messageDiv.textContent = "⚠️ Votre panier est vide.";
        messageDiv.className = "message erreur";
        return;
    }

    var adresse = document.getElementById('adresse').value.trim();
    var ville = document.getElementById('ville').value;
    var telephone = document.getElementById('telephone').value.trim();

    if (adresse.length < 5) {
        messageDiv.textContent = "⚠️ Adresse invalide (min. 5 caractères).";
        messageDiv.className = "message erreur";
        return;
    }
    if (!ville) {
        messageDiv.textContent = "⚠️ Veuillez sélectionner une wilaya.";
        messageDiv.className = "message erreur";
        return;
    }

    // RegEx pour le téléphone algérien
    var regexTel = /^(0)(5|6|7)[0-9]{8}$/;
    if (!regexTel.test(telephone)) {
        messageDiv.textContent = "⚠️ Numéro invalide. Format : 05/06/07 + 8 chiffres.";
        messageDiv.className = "message erreur";
        return;
    }

    var numCmd = 'CMD-' + Date.now().toString().slice(-6);
    var nom = localStorage.getItem('utilisateurConnecte');
    messageDiv.innerHTML = "✅ <strong>Commande confirmée !</strong><br>N° : <strong>" + numCmd +
        "</strong><br>Livraison : " + adresse + ", " + ville + "<br>Merci <strong>" + nom + "</strong> !";
    messageDiv.className = "message succes";

    panier = [];
    localStorage.removeItem('panier');
    afficherPanier();
    mettreAJourCompteurPanier();
    document.getElementById('formulaire-commande').reset();
}

// 11 - menu pour les téléphones
function toggleMenu() {
    var nav = document.getElementById('nav-menu');
    var hamburger = document.getElementById('hamburger');
    if (nav && hamburger) {
        nav.querySelector('ul').classList.toggle('actif');
        hamburger.classList.toggle('actif');
    }
}

// 12 - on lance tout quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    verifierSession();
    mettreAJourCompteurPanier();

    if (document.getElementById('grille-produits')) chargerProduits();
    if (document.getElementById('contenu-panier')) afficherPanier();

    var fc = document.getElementById('formulaire-connexion');
    if (fc) fc.addEventListener('submit', validerConnexion);

    var fi = document.getElementById('formulaire-inscription');
    if (fi) fi.addEventListener('submit', validerInscription);

    var fco = document.getElementById('formulaire-commande');
    if (fco) fco.addEventListener('submit', validerCommande);

    var hb = document.getElementById('hamburger');
    if (hb) hb.addEventListener('click', toggleMenu);
});