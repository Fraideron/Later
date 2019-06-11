import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import "firebase/auth";

import { environment } from '../../environments/environment';
import {Observable, ReplaySubject} from "rxjs";

import {AngularFireAuth} from "@angular/fire/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  user: Observable<firebase.User>;
  authenticated: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private angularFire: AngularFireAuth
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }

    this.angularFire
      .authState
      .subscribe(
        (user) => {
          console.log(user);
          if (user != null) {
            this.user = angularFire.authState;
            this.authenticated.next(true);
          }
        }
      )


  }

  isLogedin() {

  }




  doGoogleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      return this.angularFire
        .auth
        .signInWithPopup(provider)
        .then(
          (res) => {
            this.authenticated.next(true);
          }
        ).catch(
        (err) => {
          this.authenticated.next(false) ;
        }
      );

  }

  doSignOut() {
   this.angularFire.auth.signOut();
   this.authenticated.next(false);
  }

}
