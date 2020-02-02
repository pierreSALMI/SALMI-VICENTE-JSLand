const prompt = require("prompt-sync")();

const Personnes = require('./Personnes')

class Restaurateur extends Personnes {
    constructor(nv_nom, nv_prenom, manager) {
        super(nv_nom, nv_prenom)
        this.manager = manager
    }

    commande(restaurant, client, nb_client){
        console.log("Restaurateur : Très bien, vous êtes donc X. ")
        const nb_menu1 = parseInt(prompt("Combien y aura t-il de menus 1 ?"), 10)
        const nb_menu2 = parseInt(prompt("Et combien de menus 2 ?."),10)
        if ((nb_menu1 + nb_menu2) == nb_client) {
            let total = (nb_menu1 * restaurant.prix_menu1) + (nb_menu2 * restaurant.prix_menu2)
            client.payer(total, restaurant)
        }
        else{
            console.log(((nb_menu1 + nb_menu2)))
            console.log("Restaurateur : J'ai du mal noter quelque chose... On recommence !")
            restaurant.appelle_employee(client)
        }
    }
}

module.exports = Restaurateur