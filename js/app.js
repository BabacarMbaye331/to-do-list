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
filtre_tous(taches)

filtre_EnCours(taches)

filtre_Terminer(taches)

HautePriorite(taches)

FiltreFormation(taches)