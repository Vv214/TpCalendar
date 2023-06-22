import { Client } from "./Client";
import { Creneau } from "./Creneau";

export class rendezVous{
    creneau : Creneau = new Creneau(0,0,0,0);
    client: Client = new Client('', '', '', 0, '');
    constructor (creneau: Creneau, client:Client){
        this.creneau = creneau
        this.client = client;
    }


}