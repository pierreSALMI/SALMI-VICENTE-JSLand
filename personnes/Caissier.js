const Personnes = require('./Personnes')

class Caissier extends Personnes {
    constructor(nv_nom, nv_prenom) {
        super(nv_nom, nv_prenom)
    }
    commande(list_client, budget, prix_total, nb_place){
        
        if (nb_place < list_client.size) {
            console.log("Caissier : Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
            this.attraction.nb_place(0);
            return budget
        }
        else if (prix_total > budget) {
        } else if ((list_client * this.attraction.prix()) > budget) {
            console.log("Caissier : Ah... Il semblerait que vous n'avez pas assez sur votre compte.")
            return budget
        } else {
            console.log("Caissier: Ah enchanté de vous rencontrer: "+ 
            list_client.forEach(nom => {
                console.log(nom)
            })+
            ". Il y aure donc" + list_client.size + " tickets soit" + prix_total + " euros s'il vous plait."
            )//fin console log
            return budget - prix_total
        }
    }
}

module.exports = Caissier