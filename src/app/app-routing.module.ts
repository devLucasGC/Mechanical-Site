import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './home/components/form-component/form-component.component';
import { ListComponentComponent } from './home/components/list-component/list-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  // { path: '**', component: TutorialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponentComponent },
  { path: 'form', component: FormComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
