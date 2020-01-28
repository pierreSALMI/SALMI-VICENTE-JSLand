class Attraction{
    constructor(nb_place, prix_ticket){
        this.nb_place = nb_place;
        this.prix_ticket = prix_ticket;
    }

    get nb_place() {
        return this.nb_place;
      }
    
    set nb_place(Nnb_place) {
        this.nb_place = Nnb_place;
      }
      
    get prix_ticket() {
        return this.prix_ticket;
      }
    
    set prix_ticket(Nprix_ticket) {
        this.prix_ticket = Nprix_ticket;
      }
}

