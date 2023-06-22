import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
//   })
export class Client {
    id :number =0;
    prenom: string;
    nom: string;
    message: string;
    telephone: string;
    isAdmin: boolean;
    email: string;
    constructor(
        prenom: string, 
                nom: string, 
                message: string, 
                telephone: string, 
                isAdmin:boolean, 
                email: string) {
        //this.id = this.id+1,
        this.prenom = prenom;
        this.nom = nom;
        this.message = message;
        this.telephone = telephone;
        this.email = email;
        this.isAdmin= isAdmin;
    }

    setId(id:number):void {
        this.id =id;
        this.isAdmin = isAdmin;
    }
}
