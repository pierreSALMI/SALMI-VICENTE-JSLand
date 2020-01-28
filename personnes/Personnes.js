class Personnes {
    constructor(new_nom, new_prenom) {
        this.nom = new_nom;
        this.prenom = new_prenom;
    }

    identite() {
        id = "Bonjour, je suis " + this.nom + " " + this.prenom;
        return id;
    }
}

module.exports = Personnes