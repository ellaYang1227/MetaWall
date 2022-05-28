import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditNameComponent } from '@components/edit-name/edit-name.component';
import { ItemUserModule } from '@components/item-user/item-user.module';
import { NoDataModule } from '@components/no-data/no-data.module';
import { TitleModule } from '@components/title/title.module';
import { UpdatePasswordComponent } from '@components/update-password/update-password.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MyLikesComponent } from './my-likes/my-likes.component';
import { MyTracksComponent } from './my-tracks/my-tracks.component';

@NgModule({
  declarations: [
    MemberComponent,
    EditProfileComponent,
    UpdatePasswordComponent,
    EditNameComponent,
    MyLikesComponent,
    MyTracksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule,
    TitleModule,
    ItemUserModule,
    NoDataModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class MemberModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
