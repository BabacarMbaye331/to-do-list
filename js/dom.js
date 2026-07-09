//  importation de fonction listesTaches qui gere la recuperation des taches
import { listesTaches, calcule_Dasboard } from "./utile.js";
const taches = await listesTaches().then( r => { return r }); 


/* ************************Dashboard */

// recuperation de donnees_dashboard pour le remplir dynamiquement
const donnees_dashboard = document.querySelector(".donnees_dashboard");

// appelation de la fonction dashboard depuis utile.js
export function Dashboard() {

    const {
        totale: totale_Taches,
        terminer: tache_Terminer,
        enCours: tache_enCours,
        formation: tache_enFormation
    } = calcule_Dasboard(taches);
    
    donnees_dashboard.innerHTML =`
        <p><strong>Totale Taches : </strong> <span class="totaleTachhes">${totale_Taches}</span></p>
        <p><strong> Taches Terminer : </strong> <span class="tacheTerminer">${tache_Terminer}</span></p>
        <p><strong> Taches en cours : </strong> <span class="tacheEnCours">${tache_enCours}</span></p>
        <p><strong> Haute priorite : </strong> <span class="hautePriorite">${tache_enFormation}</span></p>
    `
}

// *********************************blocks

// recuperation de la section blocks
const blocks = document.querySelector(".blocks");

// fonction getListesListes qui va charger de recuperer tous les taches
export function getListesTaches() {
    taches.forEach(tache => {

        // creation de l'element article
        const article = document.createElement('article');
        article.classList.add('card');

        // teste sur le status du tache est-ce en cours ou terminer
        const status = tache.status;
        const statusLabel = status === true ? "Terminer" : "En cours";

        article.innerHTML = `
                <p>******************************************</p>
                <h3><span class="icon"><i class="fa-solid fa-meteor"></i></span> ${tache.titre}</h3>
                <p>description : ${tache.description}</p>
                <p>categories : ${tache.categories}</p>
                <p>priorite : ${tache.priorite}</p>
                <p>Status : ${statusLabel}</p>
                <div class="actions">
                    <button class="btn_action" id="btn__modifier">Modifier</button>
                    <button class="btn_action" id="btn__supprimer">Supprimer</button>
                    <button class="btn_action" id="btn__terminer">Terminer</button>
                </div>
                <p>******************************************</p>
        `;
        blocks.appendChild(article)
    });
}


