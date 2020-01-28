const Personnes = require('./Personnes')

class Manager extends Personnes {
    constructor(nv_nom, nv_prenom) {
        super(nv_nom, nv_prenom)
    }
}

module.exports = Manager