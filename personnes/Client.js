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

    partAttraction(nom_attraction) {
        console.log("Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille.")
        rl.question("Il y a : ", function(peoples) {
            console.log(peoples);
            peoples = peoples.split(' ');
            peoples.forEach(element => {
                console.log(element);
            });
            console.log(+" participe à " + nom_attraction);
            rl.close();
        });
        return null
    }
}

module.exports = Client