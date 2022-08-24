import { Department } from "./department";
import { Reservation } from "./reservation";

export class User {
    id!: number;
    email!: string;
    nom!: string;
    prenom!: string;
    plainPassword!: string;
    department!: string;
    reservationsCreer!: Reservation[];
    reunions!: Reservation[];
    roles!:string[];
    
 

}
