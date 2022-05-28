import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberComponent } from './member.component';
import { MyLikesComponent } from './my-likes/my-likes.component';
import { MyTracksComponent } from './my-tracks/my-tracks.component';

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
    path: 'myTracks',
    component: MyTracksComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
