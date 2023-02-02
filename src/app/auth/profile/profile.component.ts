import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email:string;

  constructor(){
    this.email = localStorage.getItem('email')
    
  }
  
}
