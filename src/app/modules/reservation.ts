import { Salle } from "./salle";
import { User } from "./user";

export class Reservation {
    id!: number;
    dateDeb!: Date;
    dateFin!: Date;
    responsable!: User;
    participiants!: User[];
    salle!: Salle; 

    constructor(args: Reservation){
        this.id=args.id;
        this.dateDeb=args.dateDeb;
        this.dateFin=args.dateFin;
        this.responsable=args.responsable;
        this.participiants=args.participiants;
        this.salle=args.salle;

    }
}
