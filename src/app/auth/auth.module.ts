import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';


//import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MessageComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class AuthModule {

  constructor(){
  }
 }
