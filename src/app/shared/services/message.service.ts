
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore:AngularFirestore) { }
  createMessage(message:any)
  {
    return this.firestore.collection("messages").add(message);
  }
  /*
  updateMessage(message:any,id:string)
  {
    return this.firestore.doc("Message/"+id).update(message);
  }*/

  ReadMessage(): Observable<any> {
    return this.firestore.collection("Message").snapshotChanges();  }
}