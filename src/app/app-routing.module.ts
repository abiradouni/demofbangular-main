import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatComponent } from './auth/chat/chat.component';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [

  { path:'', component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'manage',component: ManageComponent, canActivate : [AuthGuard]},
  {path:'chat',component: ChatComponent},



 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
