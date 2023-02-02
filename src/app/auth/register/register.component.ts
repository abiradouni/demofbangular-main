import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/shared/classes/auth';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: RegisterForm  = {
    fullName:'',
    age: null,
    phone :'',
    email:'',
    password:'',
    confirm_password:'',
   };

   passwordMatched: boolean = true;
   private firestore: FirebaseTSFirestore;
   
   constructor(private authService: AuthService){
    /*this.firestore = new FirebaseTSFirestore;
    this.firestore.create(
      {
        path: ["USERS_COLLECTION"],
       data: {
       },
       onComplete: (documentId) => {
        alert("created doc "+ documentId);
       },
       onFail: (err) => {
        alert("Failed to create doc");
       }
      }
    );
    */
 
   }
   ngOnInit(): void {
     
   }
   submit(){
   this.authService.register(this.form);
      
  }

  isLoading(){
    return this.authService.isLoading;
  }



}
