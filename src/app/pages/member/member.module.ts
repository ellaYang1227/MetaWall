import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditNameComponent } from '@components/edit-name/edit-name.component';
import { UpdatePasswordComponent } from '@components/update-password/update-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleModule } from './../../components/title/title.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';

@NgModule({
  declarations: [
    MemberComponent,
    EditProfileComponent,
    UpdatePasswordComponent,
    EditNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule,
    TitleModule,
    NgbModule
  ]
})
export class MemberModule { }
