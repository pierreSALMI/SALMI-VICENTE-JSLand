const Personnes = require('./Personnes')

class Manager extends Personnes {
    constructor(nv_nom, nv_prenom) {
        super(nv_nom, nv_prenom)
    }

    rep_plainte(client, employee){
        if (employee.manager.nom == this.nom) {
            console.log(`Manager : Quoi ?! Votre derniere expérience au "${client.dernier_endroi.nom}" avec ${employee.nom} ne vous a pas convaincu ?? Laissez moi vous dédommager. Tenez voilà ${client.dernier_paie}`)
            client.recup_argent(client.dernier_paie)
        } else {
            console.log("Manager : Je ne connais pas cet employé, je ne suis pas son manager")
        }
    }
}

module.exports = Manager