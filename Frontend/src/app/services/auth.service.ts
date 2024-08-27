import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loginUser(user: User) {
        let UserArray: User[] = [];
        if(localStorage.getItem('Users')){
            UserArray = JSON.parse(localStorage.getItem('Users') ||'{}' );
        }
        return UserArray.find(p => p.username === user.username && p.password === user.password);
    }
}