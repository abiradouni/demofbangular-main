import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../shared/classes/auth';
import { AngularFireDatabase} from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading: boolean = false;
  isAuthentificated: boolean = false;


  constructor(private router :Router , private db: AngularFireDatabase) { }

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

   const auth = getAuth();

   signInWithEmailAndPassword(auth, form.email, form.password).then((userCredential) => {
     this.isAuthentificated = true;
     this.router.navigate(['profile']);

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
     })
     .catch((error) => {
      this.isAuthentificated = false;
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
     }).finally(() =>this.isLoading = false)
  }

  createUser(){
    
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








