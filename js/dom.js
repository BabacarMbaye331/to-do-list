//  importation de fonction listesTaches qui gere la recuperation des taches
import { calcule_Dasboard, changeColor } from "./utile.js";


/* ************************Dashboard */

// recuperation de donnees_dashboard pour le remplir dynamiquement
const donnees_dashboard = document.querySelector(".donnees_dashboard");

// appelation de la fonction dashboard depuis utile.js
export function Dashboard(listes) {

    const {
        totale: totale_Taches,
        terminer: tache_Terminer,
        enCours: tache_enCours,
        formation: tache_enFormation
    } = calcule_Dasboard(listes);

    donnees_dashboard.innerHTML = `
        <p><strong>Totale Taches : </strong> <span class="totaleTachhes">${totale_Taches}</span></p>
        <p><strong> Taches Terminer : </strong> <span class="tacheTerminer">${tache_Terminer}</span></p>
        <p><strong> Taches en cours : </strong> <span class="tacheEnCours">${tache_enCours}</span></p>
        <p><strong> Haute priorite : </strong> <span class="hautePriorite">${tache_enFormation}</span></p>
    `
}


// *********************************blocks

// recuperation de la section blocks
const blocks = document.querySelector(".blocks");

// fonction getListesTaches qui va charger de recuperer tous les taches
export function getListesTaches(listes) {
    blocks.innerHTML = "";

    listes.forEach(tache => {
        const article = document.createElement('article');
        article.classList.add('card');

        article.innerHTML = `
                <p>******************************************</p>
                <h3><span class="icon"><i class="fa-solid fa-meteor"></i></span> ${tache.titre}</h3>
                <p>description : ${tache.description}</p>
                <p>categories : ${tache.categories}</p>
                <p>priorite : ${tache.priorite}</p>
                <p>Status : ${tache.status}</p>
                <div class="actions">
                    <a href="../pages/modifierTache.html?tache=${tache.id}">
                        <button class="btn_action" id="btn__modifier">Modifier</button>
                    </a>
                    <button class="btn_action btn_suppression" data-id=${tache.id} id="btn__supprimer">Supprimer</button>
                    <button class="btn_action btn__terminer" id="btn__terminer">Terminer</button>
                </div>
                <p>******************************************</p>
        `;
        blocks.appendChild(article)
    });
}

// ***************************************search

export function search(toutesLesTaches) {
    const recherche = document.querySelector("#search");

    if (recherche) {
        recherche.addEventListener("input", () => {
            const valeur = recherche.value.trim().toLowerCase();

            if (valeur !== '') {
                for (let i = 0; i < valeur.length; i++) {
                    const resultats = toutesLesTaches.filter((r) =>
                        r.titre.toLowerCase().includes(valeur)
                    );

                    if (resultats.length > 0) {
                        getListesTaches(resultats);
                    } else {
                        blocks.innerHTML = `<h2>introuvable</h2>`
                    }

                }
            } else {
                getListesTaches(toutesLesTaches)
            }



        });
    }
}

// ************************************les boutons de filtrages

// recuperation des boutons filtres
const filtre__tous = document.querySelector("#filtre__tous");
const filtre__encours = document.querySelector("#filtre__enCours");

const filtre__terminer = document.querySelector("#filtre__terminer");
const filtre__hautePrioris = document.querySelector("#filtre__hautePrioris");
const filtre__formation = document.querySelector("#filtre__formation");





// fonction pour bouton filtre tous 
export function filtre_tous(listesTaches) {

    if (filtre__tous) {
        filtre__tous.addEventListener('click', () => {

            // changement de couleur des boutons
            changeColor(filtre__tous, [filtre__encours, filtre__terminer, filtre__hautePrioris, filtre__formation]);

            getListesTaches(listesTaches);
        })

    }

}


// fonction pour bouton filtre tous 
export function filtre_EnCours(listesTaches) {

    if (filtre__encours) {
        filtre__encours.addEventListener('click', () => {


            // changement de couleur des boutons
            changeColor(filtre__encours, [filtre__tous, filtre__terminer, filtre__hautePrioris, filtre__formation]);

            const encours = listesTaches.filter(e => e.status === "En cours");
            getListesTaches(encours);

        })

    }

}

// fonction pour bouton filtre tous 
export function filtre_Terminer(listesTaches) {

    if (filtre__terminer) {
        filtre__terminer.addEventListener('click', () => {


            // changement de couleur des boutons
            changeColor(filtre__terminer, [filtre__tous, filtre__encours, filtre__hautePrioris, filtre__formation])

            const encours = listesTaches.filter(e => e.status === "Terminer");
            getListesTaches(encours);

        })

    }

}

// fonction pour bouton filtre tous 
export function HautePriorite(listesTaches) {

    if (filtre__hautePrioris) {
        filtre__hautePrioris.addEventListener('click', () => {


            // changement de couleur des boutons
            changeColor(filtre__hautePrioris, [filtre__encours, filtre__tous, filtre__terminer, filtre__formation])


            const encours = listesTaches.filter(e => e.priorite === "Haute");
            getListesTaches(encours);

        })

    }

}

// fonction pour bouton filtre tous 
export function FiltreFormation(listesTaches) {

    if (filtre__formation) {
        filtre__formation.addEventListener('click', () => {

            // changement de couleur des boutons
            changeColor(filtre__formation, [filtre__encours, filtre__tous, filtre__terminer, filtre__hautePrioris])


            const encours = listesTaches.filter(e => e.categories === "Formation");
            getListesTaches(encours);

        })

    }

}

// fonction qui declanche affiche le formulaire d'ajout de nouvelle tahe
export function on_FormAjoutTache() {
    // bouton qui affiche le formulaire
    const btn_ajoutTache = document.querySelector('#btn_ajoutTache');

    // recuperation des autres elements du html
    const drop = document.querySelector('.drop');
    const ajoutTache = document.querySelector('#jouterTache')

    if (btn_ajoutTache) {
        btn_ajoutTache.addEventListener('click', () => {
            drop.classList.add('dropPlan')
            ajoutTache.classList.add('ajouterTache')
            ajoutTache.classList.remove('caheFormTache')
        })
    }
}

export function close_FormAjoutTache() {
    // bouton qui affiche le formulaire
    const icon_close = document.querySelector('.icon_close');
    const annulTache = document.querySelector('#annulTache');

    // recuperation des autres elements du html
    const drop = document.querySelector('.drop');
    const ajoutTache = document.querySelector('#jouterTache')

    // icon rouge du fermuler pour fermer le popop du firmulaire
    if (icon_close) {
        icon_close.addEventListener('click', () => {
            drop.classList.remove('dropPlan')
            ajoutTache.classList.remove('ajouterTache')
            ajoutTache.classList.add('caheFormTache')
        })
    }

    // bouton annuler du formulaire pour annuler le formulaire
    if (annulTache) {
        annulTache.addEventListener('click', () => {
            drop.classList.remove('dropPlan')
            ajoutTache.classList.remove('ajouterTache')
            ajoutTache.classList.add('caheFormTache')
        })
    }
}

// fonction ajout de tache tache
export function ajouterTache(listes) {

    // recuperation des elements html
    const formulaireAjout = document.querySelector("#ajout_Tache");
    const titreTacheAjouter = document.querySelector("#titre");
    const descriptionTacheAjouter = document.querySelector("#description");
    const categorieTacheAjouter = document.querySelector("#categorie");
    const prioriteTacheAjouter = document.querySelector("#priorite");
    const dateCreationTacheAjouter = document.querySelector("#dateCreation");
    const dateLimiteTacheAjouter = document.querySelector("#dateLimite");
    const statusTacheAjouter = document.querySelector("#status");

    if (formulaireAjout) {
        formulaireAjout.addEventListener("submit", (e) => {
            e.preventDefault();

            const nouveauId = listes.length > 0 ? Math.max(...listes.map(t => t.id)) + 1 : 1;
            
            const registreTache = {
                id: nouveauId,
                titre: titreTacheAjouter.value,
                description: descriptionTacheAjouter.value,
                categories: categorieTacheAjouter.value,
                priorite: prioriteTacheAjouter.value,
                dateCreation: dateCreationTacheAjouter.value,
                dateLimite: dateLimiteTacheAjouter.value,
                status: statusTacheAjouter.value
            };

            listes.push(registreTache);

            localStorage.setItem('listes', JSON.stringify(listes));

            location.href = "../pages/index.html";
        });
    }
}