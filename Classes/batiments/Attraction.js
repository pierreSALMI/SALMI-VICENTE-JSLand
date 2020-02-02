class Attraction{
    constructor(nb_place, prix_ticket, nom, employee){
        this.nb_place = nb_place
        this.nb_place_rest = nb_place
        this.prix_ticket = prix_ticket
        this.nom = nom
        this.employee = employee
    }

    appelle_employee(client, list_client, budget){
      var prix_total = list_client.length * this.prix_ticket
      this.employee.commande(this, client,list_client, budget, prix_total, this.nb_place)
    }
}

module.exports = Attraction
