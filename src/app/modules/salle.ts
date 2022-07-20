export class Salle {
    id!: number;
    capaciter!: number;
    etat!: boolean;

    constructor(args: Salle){
        this.id=args.id;
        this.capaciter=args.capaciter;
        this.etat=args.etat;
    }
}
