import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
{path : '', redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'home/:username',component:HomeComponent, canActivate : [RouteGuardService]},
{path:'todos',component:TodoListComponent, canActivate : [RouteGuardService]},
{path:'logout',component:LogoutComponent, canActivate : [RouteGuardService]},
{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export  const AppRoutingComponents = [
  LoginComponent,
  HomeComponent,
  PageNotFoundComponent,
  TodoListComponent,
  LogoutComponent
]


