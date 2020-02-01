const prompt = require("prompt-sync")();

const Personnes = require('./Personnes')

class Restaurateur extends Personnes {
    constructor(nv_nom, nv_prenom, manager) {
        super(nv_nom, nv_prenom)
        this.manager = manager
    }

    commande(client, budget, restaurant){
        const nb_client = prompt("Restaurant : Ah bonjour ! Combien êtes vous ?" )
        this.recommence(client, budget, nb_client)
    }

    recommence(client, budget, restaurant, nb_client){
        console.log("Restaurateur : Très bien, vous êtes donc X. ")
        const nb_menu1 = prompt("Combien y aura t-il de menus 1 ?")
        const nb_menu2 = prompt("Et combien de menus 2 ?.")
        if ((nb_menu1 + nb_menu2) == nb_client) {
            let total = nb_menu1 * restaurant.prix_menu1
            total += nb_menu2 * restaurant.prix_menu2
            
        }
        else{
            console.log("Restaurateur : J'ai du mal noter quelque chose... On recommence !")
        }
    }
}

module.exports = Restaurateur