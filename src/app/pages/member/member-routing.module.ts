import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberComponent } from './member.component';
import { MyFollowingComponent } from './my-following/my-following.component';
import { MyLikesComponent } from './my-likes/my-likes.component';

const routes: Routes = [{
  path: '',
  component: MemberComponent,
  children: [{
    path: 'editProfile/:tab',
    component: EditProfileComponent
  }, {
    path: 'myLikes',
    component: MyLikesComponent
  }, {
    path: 'myFollowing',
    component: MyFollowingComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
