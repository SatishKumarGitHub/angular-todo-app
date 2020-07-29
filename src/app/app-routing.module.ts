import { FelxBoxComponent } from './felx-box/felx-box.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { UiFundamentalComponent } from './ui-fundamental/ui-fundamental.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { RegistrationComponent } from './forms/registration/registration.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'reactive-register', component: ReactiveFormComponent },
  {path: 'ui-fundamentals', component: UiFundamentalComponent},
  {path: 'my-website', component: MyWebsiteComponent},
  {path : 'flex-box', component: FelxBoxComponent},
  {path: 'home/:username', component: HomeComponent, canActivate : [RouteGuardService]},
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const AppRoutingComponents = [
  LoginComponent,
  HomeComponent,
  PageNotFoundComponent,
  TodoListComponent,
  LogoutComponent,
  RegistrationComponent,
  ReactiveFormComponent,
  UiFundamentalComponent,
  MyWebsiteComponent,
  FelxBoxComponent,
];
