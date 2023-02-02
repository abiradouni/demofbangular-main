
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { message } from "../shared/classes/message";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private afs:AngularFirestore,private message : ChatService) { }
  createMessage(message: message)
  {
    message.id = this.afs.createId();
    return this.afs.collection("Message").add(message);
  }
  
  /*
  updateMessage(message:any,id:string)
  {
    return this.firestore.doc("Message/"+id).update(message);
  }*/

  ReadMessage(): Observable<any> {
    return this.afs.collection("Message").snapshotChanges();  }
}


