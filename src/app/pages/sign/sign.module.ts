import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignRoutingModule } from './sign-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignComponent } from './sign.component';

@NgModule({
  declarations: [
    SignComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    FormsModule
  ]
})
export class SignModule { }
