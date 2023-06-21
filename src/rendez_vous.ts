import { Client } from "./app/Service/Client";

export class rendezVous{
    date : Date = new Date();
    client: Client = new Client('', '', '', 0, '');
    constructor (date :Date, client:Client){
        this.date =date;
        this.client = client;
    }

}