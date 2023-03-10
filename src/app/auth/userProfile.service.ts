import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { deleteUser } from "firebase/auth";
import { User } from "../shared/classes/user";

@Injectable({
    providedIn :'root'
})
export class userProfileService{
    user: any;
    email:string;
    constructor(private afs : AngularFirestore){
    }

    // create user profile
      
    createUser(user : any){
        user.id = this.afs.createId();
        return this.afs.collection('/Users').add(user);
    }

    readAllUsers(){
      //return this.afs.collection('Users').snapshotChanges();
      return this.afs.collection('Users').valueChanges();
    }

    getUserID()
    {
        return this.afs.collection('id').snapshotChanges();
    }

    
    deleteUser(user : User){
        return this.afs.doc('/Users' +user.id).delete();
    }  

    updateUserProfilePicture(url: string) {
        if (this.user) {
          this.user.updateProfile({
            photoURL: url
          }).then(() => {
            console.log('Profile picture updated successfully');
          }).catch((error: any) => {
            console.log('Error updating profile picture:', error);
          });
        }
      }


    
    }
