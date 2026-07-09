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
export function calcule_Dasboard(listes) {
    return {
        totale: listes.length,
        terminer: listes.filter((t) => t.status).length,
        enCours: listes.filter((v) => !v.status).length,
        formation: listes.filter((r) => r.categories === "Formation").length
    };
}