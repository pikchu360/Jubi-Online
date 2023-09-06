import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component:DashboardComponent},
  {path: 'iniciar-sesion', component:LoginComponent},
  {path: 'recuperar', component:RecoverComponent},
  {path: 'messages', component:MessagesComponent},
  {path: 'calendar', component:CalendarComponent},
  {path: 'activities', component:ActivitiesComponent},
  {path: 'users', component:UsersComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
