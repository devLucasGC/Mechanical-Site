import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  // { path: '**', component: TutorialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tutorial', component: TutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
