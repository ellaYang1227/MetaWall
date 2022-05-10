import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FilterPostsComponent } from './filter-posts.component';

@NgModule({
  declarations: [
    FilterPostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    FilterPostsComponent
  ]
})
export class FilterPostsModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
