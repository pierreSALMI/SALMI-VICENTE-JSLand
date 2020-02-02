class Personnes {
    constructor(new_nom, new_prenom) {
        this.nom = new_nom
        this.prenom = new_prenom
    }

    get getNom() {
        return this.nom
    }

    get getPrenom() {
        return this.prenom
    }
}

module.exports = Personnes