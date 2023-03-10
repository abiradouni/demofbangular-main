import { Component,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { userProfileService } from '../userProfile.service';
import { HttpClient } from '@angular/common/http';
import { Observable ,from,switchMap, map} from 'rxjs';
import { getDownloadURL,ref,Storage,uploadBytes} from '@angular/fire/storage'
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{
  isShowing= true;
  placeholder:string;

  user: any;
  profilePictureUrl: string;
  users:any;

  constructor(public authService: AuthService, private storage: AngularFireStorage,private userProfileService: userProfileService,
    private userapi:UserService) {
  }
  ngOnInit(): void {
    this.readUsers();
    const userString = localStorage.getItem('user');
    if(userString){
      this.user = JSON.parse(userString);
    }
    else {
      this.userProfileService.readAllUsers().subscribe((users: User[]) => 
      {
        this.user = users[0];
        localStorage.setItem('user',JSON.stringify(this.user));
      });
    }
  }

  readUsers()
  {
    this.userapi.ReadUsers().pipe
    ( map(changes =>
      changes.map((c: { payload: { doc: { id: any; data: () => {}; }; }; }) =>
        ({ id: c.payload.doc.id,
          ...c.payload.doc.data() as {} })
      )
    )
  ).subscribe(data => {
    this.users = data;
    console.log("liste des users",this.users);
  }
  );
}

  
  

  




}
