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
        terminer: listes_taches.filter((t) => t.status).length,
        enCours: listes_taches.filter((v) => !v.status).length,
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