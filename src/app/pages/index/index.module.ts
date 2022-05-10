import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FilterPostsModule } from './../../components/filter-posts/filter-posts.module';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IndexRoutingModule,
    FilterPostsModule,
    FontAwesomeModule
  ]
})
export class IndexModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas, fab, far);
  }
}
