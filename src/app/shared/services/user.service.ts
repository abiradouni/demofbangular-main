import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { }
  createUser(user:any)
  {
    return this.firestore.collection("Users").add(user);
  }
  updateUser(user:any,id:string)
  {
    return this.firestore.doc("Users/"+id).update(user);}
    
  ReadUsers(): Observable<any> {
    return this.firestore.collection("Users").snapshotChanges();  }


  ReadByEmail(email: string) {
      return this.firestore.collection("Users",(ref)=> ref.where("email","==",email)).snapshotChanges();}


    deleteUser(id:any) {
      return this.firestore.doc('Users/'+id).delete().then(()=>{
        console.log('User Deleted');
      }).catch((err)=>{
        console.log(err);
      });  }
}
