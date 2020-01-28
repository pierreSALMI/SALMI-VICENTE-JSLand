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
}

module.exports = Client