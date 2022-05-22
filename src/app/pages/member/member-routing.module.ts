import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberComponent } from './member.component';

const routes: Routes = [{
  path: '',
  component: MemberComponent,
  children: [{
    path: 'editProfile/:tab',
    component: EditProfileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
