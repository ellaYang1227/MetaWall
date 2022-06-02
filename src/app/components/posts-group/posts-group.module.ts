import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPostsModule } from '@components/filter-posts/filter-posts.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemUserModule } from './../item-user/item-user.module';
import { NoDataModule } from './../no-data/no-data.module';
import { PostsGroupComponent } from './posts-group.component';

@NgModule({
  declarations: [
    PostsGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPostsModule,
    FontAwesomeModule,
    ItemUserModule,
    NoDataModule,
    NgbModule
  ],
  exports: [
    PostsGroupComponent
  ]
})
export class PostsGroupModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
