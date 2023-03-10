import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/classes/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
user=new User();
users:any;
totalUsers: number = 0;
  constructor(private userapi:UserService){}
  ngOnInit(): void {
    this.readUsers();
  }

  readUsers()
  {
    this.userapi
    .ReadUsers()
    .pipe
    ( map(changes =>
      changes.map((c: { payload: { doc: { id: any; data: () => {}; }; }; }) =>
        ({ id: c.payload.doc.id,
          ...c.payload.doc.data() as {} })
      )
    )
  ).subscribe(data => {
    this.users = data;
    console.log("liste des users",this.users);
    this.totalUsers = this.users.length;


  }
  );
}

addUser()
{
let us = Object.assign({},this.user)
  // convertir une  instance en objet
  this.userapi.createUser(us);
}

/*deleteUser(id:any)
{
  if(confirm(" Are you sure you want to delete this User ?"))
  this.userapi.deleteUser(id);
}*/

/*deleteUser(id:String) {
  if (confirm("Are you sure you want to delete this User?")) {
    this.userapi.deleteUser(id).then(() => {
      console.log("User Deleted");
      // remove the deleted user from the users array
      this.users = this.users.filter((us: any) => us.id !== id);
    }).catch((err) => {
      console.log(err);
    });
  }
  this.users = this.users.filter((us: any) => us.id !== id);
}*/

deleteUser(id:String) {
  if (confirm("Are you sure you want to delete this User?")) {
    this.userapi.deleteUser(id).then(() => {
      console.log("User Deleted");
      // remove the deleted user from the users array
      this.users = this.users.filter((us: any) => us.id !== id);
    }).catch((err) => {
      console.log(err);
    });
  }
}



}
