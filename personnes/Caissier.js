const Personnes = require('./Personnes')

class Caissier extends Personnes {
    constructor(nv_nom, nv_prenom, attraction) {
        super(nv_nom, nv_prenom)
        this.attraction = attraction
    }

    commande(list_client, budget){
        console.log("Caissier: Ah enchanté de vous rencontrer: "+ 
            list_client.forEach(nom => {
                console.log(nom)
            })+
            ". Il y aure donc" + list_client.size + " tickets soit" + (list_client * this.attraction.prix()) + " euros s'il vous plait."
        )//fin console log

        if (this.attraction.nb_place < list_client.size) {
            console.log("Caissier : Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
            this.attraction.nb_place(0);
        }
        else if ((list_client * this.attraction.prix()) > budget) {
            console.log("Caissier : Ah... Il semblerait que vous n'avez pas assez sur votre compte.")
        } else {
            return budget - (list_client * this.attraction.prix())
        }
    }
}

module.exports = Caissier