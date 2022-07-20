import { Reservation } from "./reservation";

export class User {
    id?: number;
    email?: string;
    nom?: string;
    prenom?: number;
    password?: string;
    reservationsCreer?: Reservation[];
    reunions?: Reservation[];
    
    constructor(args: User){
        this.id=args.id;
        this.email=args.email;
        this.nom=args.nom;
        this.prenom=args.prenom;
        this.reservationsCreer=args.reservationsCreer;
        this.reunions=args.reunions;

    }

}
