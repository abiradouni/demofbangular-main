import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { deleteUser } from "firebase/auth";
import { User } from "../shared/classes/user";

@Injectable({
    providedIn :'root'
})
export class userProfileService{
    constructor(private afs : AngularFirestore){
    }

    // create user/profile
      
    createUser(user : any){
        user.id = this.afs.createId();
        return this.afs.collection('/Users').add(user);
    }

    readAllUsers(){
      return this.afs.collection('Users').snapshotChanges();

    }

    
    deleteUser(user : User){
        return this.afs.doc('/Users' +user.id).delete();
    }  


    
    }
