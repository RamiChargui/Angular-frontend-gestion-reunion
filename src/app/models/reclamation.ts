import { Salle } from "./salle";

export class Reclamation {
    id!: number;
    salle!: string;
    proprieter!: string;
    dateRec!: Date;
    etat!: boolean;
    description! : string;
}
