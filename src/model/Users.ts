import { User } from "./User";

export class Users{
    listeUsers: User[] = [
        new User("a","a",true),
        new User("b","b",false),
        new User("c","c",false),
    ];
    constructor(){}

    getListeuUsers(): User[]{
        return this.listeUsers;
    }

    addUser(usr:User):void{
        this.listeUsers.push(usr);
    }

}