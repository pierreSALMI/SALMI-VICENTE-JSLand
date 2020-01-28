class Restaurant{
    constructor(nom, menu1, menu2, prix_menu1, prix_menu2){
        this.nom = nom
        this.menu1 = menu2
        this.menu2 = menu2
        this.prix_menu1 = prix_menu1
    }

    get nom() {
      return this.nom
    }

    get menu1() {
        return this.menu1
      }
      
    get menu2() {
        return this.menu2
      }

    get prix_menu1() {
        return this.prix_menu1
      }
    
    set prix_menu1(Nprix_menu1) {
        this.prix_menu1 = Nprix_menu1
      }
    
    get prix_menu2() {
        return this.prix_menu2
      }
    
    set prix_menu2(Nprix_menu2) {
        this.prix_menu2 = Nprix_menu2
      }
}