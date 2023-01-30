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
  constructor(private userapi:UserService)
{}
  ngOnInit(): void {
    this.readUsers();

  }
  readUsers()
  {
    this.userapi.ReadUsers().pipe( map(changes =>
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

add()
{
let us=Object.assign({},this.user)
  // convertir une  instance en objet
  this.userapi.createUser(us);
}
deleteUser(id:any)
{
  if(confirm("êtes vous sûre de vouloir supprimer?"))
  this.userapi.deleteUser(id);
}
}
