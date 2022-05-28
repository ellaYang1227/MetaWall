import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPostsModule } from '@components/filter-posts/filter-posts.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ItemUserModule } from './../item-user/item-user.module';
import { NoDataModule } from './../no-data/no-data.module';
import { PostsGroupComponent } from './posts-group.component';

@NgModule({
  declarations: [
    PostsGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterPostsModule,
    FontAwesomeModule,
    ItemUserModule,
    NoDataModule
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
