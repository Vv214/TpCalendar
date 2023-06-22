import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
//   })
export class Client {
    prenom: string;
    nom: string;
    message: string;
    telephone: number;
    email: string;
    constructor(prenom: string, nom: string, message: string, telephone: number, email: string) {
        this.prenom = prenom;
        this.nom = nom;
        this.message = message;
        this.telephone = telephone;
        this.email = email;
    }
}