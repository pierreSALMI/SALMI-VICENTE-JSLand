class Restaurant{
    constructor(menu1, menu2, prix_menu1, prix_menu2){
        this.menu1 = menu2;
        this.menu2 = menu2;
        this.prix_menu1 = prix_menu1;
    }

    get menu1() {
        return this.menu1;
      }
    
    set menu1(Nmenu1) {
        this.menu1 = Nmenu1;
      }
      
    get menu2() {
        return this.menu2;
      }
    
    set menu2(Nmenu2) {
        this.menu2 = Nmenu2;
      }

    get prix_menu1() {
        return this.prix_menu1;
      }
    
    set prix_menu1(Nprix_menu1) {
        this.prix_menu1 = Nprix_menu1;
      }
    
    get prix_menu2() {
        return this.prix_menu2;
      }
    
    set prix_menu2(Nprix_menu2) {
        this.prix_menu2 = Nprix_menu2;
      }
}