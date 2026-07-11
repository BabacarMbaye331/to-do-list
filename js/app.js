// importation des differentsfonctions depuis dom.js
import { getListesTaches, Dashboard, search, filtre_tous, filtre_EnCours, filtre_Terminer, HautePriorite, FiltreFormation } from "./dom.js";
import { listesTaches } from "./utile.js";

// listes des taches
const taches = await listesTaches().then(r => { return r });

// appel a la fonction Dashboard
Dashboard(taches);
// appelation de fonction getListesTaches
getListesTaches(taches);

//search
// search(taches);
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