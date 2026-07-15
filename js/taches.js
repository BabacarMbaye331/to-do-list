// importation de la fonction depuis le fichier utile.js
import { tacheEnQuestion } from "./utile.js"

// recuperation de numero de la tache
let params = new URLSearchParams(window.location.search)
let idURL = params.get("tache");

// recuperation du contenu depuis localStorage
const lis = JSON.parse(localStorage.getItem('listes'))

// le tache en question
const tache = lis.find(item => item.id === Number(idURL))

// element html
let titre = document.querySelector('#titre')
let description = document.querySelector('#description')
let categorie = document.querySelector('#categorie')
let priorite = document.querySelector('#priori')
let status = document.querySelector('#status')


// recuperation de la fonction tacheEnQuestion depuis la fichier utile.js
tacheEnQuestion(tache, titre, description, categorie, priorite,  status);

// ecout d'evenement du formulaire de modification
const form_tache = document.querySelector(".form_tache");

if (form_tache) {
    form_tache.addEventListener('submit', (e) => {
        e.preventDefault();

        tache.titre = titre.value;
        tache.description = description.value;
        tache.categories = categorie.value;
        tache.priorite = priorite.value;
        tache.status = status.value;


        localStorage.setItem('listes', JSON.stringify(lis));

        // redirection vers la page d'accueil
        window.location.href ='index.html'
    })
}

