import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignComponent } from './sign.component';

const routes: Routes = [{
  path: '',
  component: SignComponent,
  children: [{
    path: 'signUp',
    component: SignUpComponent
  }, {
    path: 'signIn',
    component: SignInComponent
  }, {
    path: '**', redirectTo: '/signIn', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
