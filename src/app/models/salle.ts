export class Salle {
    id!: number;
    libelle!: string;
    capacite!: number;
    etat!: boolean;


    public comparerCapaciteSalle(capacite:number):boolean{
        if(capacite==this.capacite){
            return true; 
        }
        
        return false;

    }

}
