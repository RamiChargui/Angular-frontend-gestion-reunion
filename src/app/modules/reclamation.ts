import { Salle } from "./salle";

export class Reclamation {
    id!: number;
    dateRec!: Date;
    salle!: Salle;
    etat!: boolean;
    description! : string;

    constructor(args: Reclamation){
        this.id=args.id;
        this.dateRec=args.dateRec;
        this.salle=args.salle;
        this.etat=args.etat;
        this.description=args.description;
    }


}
