import { Time } from "@angular/common";
import { Salle } from "./salle";
import { User } from "./user";

export class Reservation {
    id!: number;
    salle!: string;
    jour!: Date;
    timeDeb!: Time;
    timeFin!: Time;
    respansable!: string;
    participiants!: User[];

    

   
    

    public comparerJour(jour: Date):boolean{
        if(this.jour==jour){
            return true;
        } 
        return false;
        
    }

    public comparerTime(deb: Time, fin:Time):boolean{
        if((this.timeDeb>deb && this.timeDeb>fin) || (deb>this.timeFin && fin>this.timeFin)){
            return true;
        }
        return false;
    }
     

    
}
