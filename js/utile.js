// recuperation des taches depuis app.js
 export async function listesTaches() {
    try {
        const r = await fetch("../api-http/taches.json")
        if (r.ok == true) {
            return r.json();
        }
            
    } catch (erreur) {
        console.log( 'une erreur est survenue sur le cote du server ' + erreur)
    }
      
}

// ************************Dashboard
export function calcule_Dasboard(listes_taches) {
    return {
        totale: listes_taches.length,
        terminer: listes_taches.filter((t) => t.status === "Terminer").length,
        enCours: listes_taches.filter((v) => v.status === "En cours").length,
        formation: listes_taches.filter((r) => r.categories === "Formation").length
    };
} 

// ****************************changement de couleur selon le bouton de filtre
// fonction stylisisation des boutons de filtres
const autres = [];

export function changeColor(point, [...autres]) {
    point.classList.toggle('changeColor');

    autres.forEach((uniq) =>{
        uniq.classList.remove('changeColor')
    })
}

// function qui va remplir le tache en question de la pagr tache.html
export function tacheEnQuestion(task, titre, description, categorie, priorite, status)
{

    // remplissage des elements html avec ls js
    titre.value = task.titre
    description.value = task.description
    categorie.value = task.categories
    
   priorite.value = task.priorite
   status.value = task.status

}