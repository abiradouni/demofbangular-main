import { Component ,OnInit} from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor(private authService:AuthService){}

  title = 'demofbangular';

ngOnInit():void {
  initializeApp(firebaseConfig)
}

isAuthenticated(){
  return this.authService.isAuthentificated;
}

logout(){
  this.authService.logOut;
}



}
