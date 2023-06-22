import { Client } from "./Client";
import { Creneau } from "./Creneau";

export class rendezVous{
    id:number = 0 ;
    creneau : Creneau = new Creneau(new Date());
    client: Client = new Client('', '', '','',false, '');
    constructor (creneau: Creneau, client:Client){
        this.creneau = creneau
        this.client = client;
    }
    setId(id:number){
        this.id= id;
    }
    getId():number{
        return this.id;
    }

}