const Caissier = require('./personnes/Caissier')
const Client = require('./personnes/Client')
const Manager = require('./personnes/Manager')
const Restaurateur = require('./personnes/Restaurateur')

const Attraction = require('./batiments/Attraction')
const Restaurant = require('./batiments/Restaurant')

var timother = new Client("Bernar", "Jean-kristov", 600)
var oui = new Manager("Manager", "Jean-michel")
var jblb = new Caissier("Caissier", "Jeam-Michel", oui)
var mesptitescouilles = new Attraction(3,300, "non",jblb)

console.log(timother.budget)
timother.partAttraction(mesptitescouilles)
console.log(timother.budget)
timother.plainte(oui, jblb)
console.log(timother.budget)