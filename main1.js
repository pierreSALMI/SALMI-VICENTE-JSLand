const Caissier = require('./Classes/personnes/Caissier')
const Client = require('./Classes/personnes/Client')
const Manager = require('./Classes/personnes/Manager')
const Restaurateur = require('./Classes/personnes/Restaurateur')

const Attraction = require('./Classes/batiments/Attraction')
const Restaurant = require('./Classes/batiments/Restaurant')



var timother = new Client("Bernar", "Jean-kristov", 700)
var manager1 = new Manager("Manager", "Jean-michel")
var manager2= new Manager("Manager", "Jack")
var caissier1 = new Caissier("Caissier", "Jeam-Michel", manager1)
var restaurateur1 = new Restaurateur('sansfamille', 'remi', manager2)

var attraction1 = new Attraction(3,300, "non",jblb)
var restaurant1 = new Restaurant('aled', 'duoui', 'dunon', 10, 20, restaurateur1)


console.log(timother.budget)
timother.manger(restaurant1)
timother.partAttraction(attraction1)
timother.partAttraction(attraction1)
console.log(timother.budget)
timother.plainte(manager1, caissier1)
console.log(timother.budget)