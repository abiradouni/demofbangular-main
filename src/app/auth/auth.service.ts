import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword,
   getAuth, signInWithEmailAndPassword,
    signOut } from 'firebase/auth';

import { LoginForm, RegisterForm } from '../shared/classes/auth';
import { FirebaseTSFirestore } from "firebasets/firebasetsFirestore/firebaseTSFirestore";

import { userProfileService } from './userProfile.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthentificated: boolean = false;
  isLoading: boolean = false;

  private firestore: FirebaseTSFirestore;


  constructor(private router :Router,private userpservice:userProfileService) {}

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

   const auth = getAuth();

   signInWithEmailAndPassword(auth, form.email, form.password).then((userCredential) => {
    let email = userCredential.user.email;
    localStorage.setItem('email',email);
    // let user :any;
    // localStorage.setItem('user',JSON.stringify(user))
    // JSON.parse(localStorage.getItem('user'));
     this.isAuthentificated = true;
     this.router.navigate(['message']);
  })
   
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthentificated = false;

  }).finally(() => (this.isLoading = false));
  }

  passwordMatched: boolean = true;

  register(form :RegisterForm){

    if(this.isLoading) return;
    this.isLoading = true;

   if(form.password  !== form.confirm_password){
     this.passwordMatched = false;
     return;
   }

   const auth = getAuth();

   createUserWithEmailAndPassword(auth,form.email, form.password)
     .then((userCredential) => {
       this.isAuthentificated= true;
       this.userpservice.createUser(form);

       this.router.navigate(['login']);

     })
     .catch((error) => {
      this.isAuthentificated = false;
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
     }).finally(() =>this.isLoading = false)
  }

  logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthentificated = false;
    }).catch((error) => {
      // An error happened.
    });

  }
}








