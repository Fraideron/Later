import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore
  ) { }

  getUsers() {
      return this.db.collection('test').valueChanges();
  }
}
