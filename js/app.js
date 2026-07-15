// importation des differentsfonctions depuis dom.js
import { Storage } from "./storage.js";
import { getListesTaches, Dashboard, search, filtre_tous, filtre_EnCours, filtre_Terminer, HautePriorite, FiltreFormation } from "./dom.js";
import { listesTaches } from "./utile.js";

// listes des taches
let taches = JSON.parse(localStorage.getItem("listes"))

if(!taches) {
    taches = await listesTaches();
    localStorage.setItem('listes', JSON.stringify(taches))
}

// appel a la fonction Dashboard
Dashboard(taches);

//search
search(taches)

// ****************************************fontions filtres
// fonction du filtrage de tous
filtre_tous(taches)

// fonction du filtrage des taches en cours
filtre_EnCours(taches)

// filtrage des taches terminer
filtre_Terminer(taches)

// filtrage des taches de haute priorites
HautePriorite(taches)

// filtrage des taches en formation
FiltreFormation(taches)

// appel de la fonction Storage
Storage(taches)



// fonction de la bouton de supperssion d'une tache
const btn_suppression = document.querySelectorAll(".btn_suppression");
btn_suppression.forEach(b => {
    b.addEventListener('click', (e) => {

        const id_v = Number(e.target.dataset.id);

        const tachesApresSuppression = taches.filter(e => e.id !== id_v);

        localStorage.setItem('listes', JSON.stringify(tachesApresSuppression));

        e.target.closest('.card').remove()

        console.log(id_v)
    })
})