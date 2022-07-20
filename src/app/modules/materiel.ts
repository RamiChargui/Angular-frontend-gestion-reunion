import { Salle } from "./salle";

export class Materiel {
    id?: number;
    libelle?: string;
    salle?: Salle;
    

    constructor(args: Materiel){
        this.id=args.id;
        this.libelle=args.libelle;
        this.salle=args.salle;

    }

}
