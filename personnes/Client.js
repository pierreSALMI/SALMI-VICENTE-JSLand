const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Personnes = require('./Personnes')

class Client extends Personnes {
    constructor(nv_nom, nv_prenom, nv_budget) {
        super(nv_nom, nv_prenom)
        this.budget = nv_budget
    }

    getBudget() {
        return this.budget
    }

    partAttraction(nomAttraction) {
        console.log('Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille.')
        let participants = []
        rl.question("Il y a :", function(famille) {
            famille = famille.split(' ')
            famille.forEach(element => {
                participants.push(element)
            })
            rl.close()

            console.log(participants)
        })
        participants.push(this.getPrenom)
    }
}

module.exports = Client