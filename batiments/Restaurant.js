class Restaurant{
    constructor(nom, menu1, menu2, prix_menu1, prix_menu2, employee){
        this.nom = nom
        this.menu1 = menu1
        this.menu2 = menu2
        this.prix_menu1 = prix_menu1
        this.prix_menu2 = prix_menu2
        this.employee = employee
    }

    appelle_employee(client, budget){
      this.employee.commande(this, client, budget)
    }


}

module.exports = Restaurant
