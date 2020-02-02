const prompt = require("prompt-sync")();

class Restaurant{
    constructor(nom, menu1, menu2, prix_menu1, prix_menu2, employee){
        this.nom = nom
        this.menu1 = menu1
        this.menu2 = menu2
        this.prix_menu1 = prix_menu1
        this.prix_menu2 = prix_menu2
        this.employee = employee
    }

    appelle_employee(client){
      const nb_client = prompt("Restaurant : Ah bonjour ! Combien êtes vous ?")
      this.employee.commande(this, client, parsInt(nb_client, 10))
    }


}

module.exports = Restaurant
