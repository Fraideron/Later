import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import "firebase/auth";
import {ReplaySubject} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: ReplaySubject<any>;

  constructor() {
  }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
        firebase.auth().onAuthStateChanged((res) => {
          if (res) {
            resolve(res)
          } else {
            reject('No user logged in');
          }
      })
    })
  }
}
