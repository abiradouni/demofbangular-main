import { Component } from '@angular/core';
import { Message } from 'src/app/shared/classes/message';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

 text: string;
  msg : any={};
  sender:any={
    nom:"aa",
    prenom:"bb",
    mail:"aa@gmail.com"
  };
  receiver:any={
    nom:"aa",
    prenom:"bb",
    mail:"aa@gmail.com"
  };

constructor(private msgservice : MessageService){

}


 submit(){


  this.msg.content = this.text;
  this.msg.sender = this.sender;
  this.msg.receiver = this.receiver;
  this.msg.dateEnv = new Date(); 
  console.log(this.msg);
  
  this.msgservice.createMessage(this.msg)

 };
}
