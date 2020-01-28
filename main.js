const Caissier = require('./personnes/Caissier')
const Client = require('./personnes/Client')
const Manager = require('./personnes/Manager')
const Restaurateur = require('./personnes/Restaurateur')

var timother = new Client("Bernar", "Jean-kristov", 800);

console.log(timother.getBudget());

timother.partAttraction("Pirates du pancréas");