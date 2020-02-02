const prompt = require("prompt-sync")();

const Personnes = require('./Personnes')

class Client extends Personnes {
    constructor(nv_nom, nv_prenom, nv_budget) {
        super(nv_nom, nv_prenom)
        this.budget = nv_budget
        this.dernier_paie = 0
        this.dernier_endroi = ""
    }

    getBudget() {
        return this.budget
    }

    partAttraction(attraction) {
        console.log('Client : Bonjour je voudrais participer � cette fantastique attraction. Je vous pr�sente les membres de ma famille.')
        var participants = prompt("Il y a :")

        const filter = [null,"", " "]

        participants.trim()

        participants = participants.split(' ')
        participants.push(this.prenom)
        participants.filter(item => !filter.includes(item))

        attraction.appelle_employee(this, participants, this.budget)
    }

    payer(a_payer, batiment){
        this.budget -= a_payer
        this.dernier_paie = a_payer
        this.dernier_endroi = batiment
        console.log(`J'ai pay� ${a_payer} � ${batiment.nom}`)
    }

    plainte(manager, employee){
        console.log(`${manager.nom} COUCOU, je viens me plaindre de ${employee.nom}`)
        manager.rep_plainte(this,employee)
    }

    recup_argent(value){
        this.budget += value
    }
    
    manger(restaurant){
        console.log(`Client. : Bonjour, je mangerai bien dans ce restaurant, le ${restaurant.nom}` )
        restaurant.appelle_employee(this)
    }
}

module.exports = Client