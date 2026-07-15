// importation de la fonction getListesTaches depuis la fichier dom.js
import { getListesTaches } from "./dom.js";

export function Storage(listes) {

    // localStorage.removeItem("listes")

    let taches = JSON.parse(localStorage.getItem("listes"));

    if (!taches) {
        localStorage.setItem("listes", JSON.stringify(listes));
        taches = listes;
    }

    getListesTaches(taches);
}