import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class GroupchatService {

  constructor(private firestore:AngularFirestore) { }

  create_NewGroupchat(group:any) {
    return this.firestore.collection('Group').add(group);
  }

  ReadGroupchat(): Observable<any> {
    return this.firestore.collection("Group").snapshotChanges();  }

  update_Groupchat(id:any) {
    this.firestore.doc('Group/' + id).update(group);
    console.log('updated');
  }

  delete_Groupchat(id:string) {
    this.firestore.doc('Group/' + id).delete();
  }
}



