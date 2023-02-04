import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/classes/message';
import { User } from 'src/app/shared/classes/user';
import { MessageService } from 'src/app/shared/services/message.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

 message: Message = {
  content:'',
  sender:null,
  receiver:null,
  dateEnv:'',
  };


  /*content: string;
  receiver: User;
  sender: User;*/
  content:string;
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
  
  

constructor(private msgservice : ChatService){

}
ngOnInit(): void {

}

 

 submit(){

  
  this.msg.content = this.content;
  this.msg.sender = this.sender;//JSON.parse(localStorage.getItem('email'))
  this.msg.receiver = this.receiver;//this.msgservice.selectReceiver()
  this.msg.dateEnv = new Date(); 
  console.log(this.msg);
  this.msgservice.createMessage(this.msg)

 };

  
}
