const Personnes = require('./Personnes')

class Caissier extends Personnes {
    constructor(nv_nom, nv_prenom, manager) {
        super(nv_nom, nv_prenom)
        this.manager = manager
    }

    commande(attraction, client,list_client, budget, prix_total, nb_place){
        if (list_client.length > nb_place) {
            console.log("Caissier : Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
            attraction.nb_place = attraction.nb_place_restant;
        } else if (budget < prix_total) {
            console.log("Caissier : Ah... Il semblerait que vous n'avez pas assez sur votre compte.")
            console.log(`Vous regardez votre porte-monnaie et constatez qu'il n'y a que ${budget}�`)
        } else {
            var reponse = "Caissier: Ah enchant� de vous rencontrer: "
            list_client.forEach(nom => {
                reponse += nom + ", "
            })
            reponse = reponse.substring(0,reponse.length-2)
            reponse += ". Il y aura donc " + list_client.length + " tickets soit " + prix_total + " euros s'il vous plait."

            console.log(reponse)

            attraction.nb_place -= list_client.length
            client.payer(prix_total, attraction);
        }
    }
}

module.exports = Caissier