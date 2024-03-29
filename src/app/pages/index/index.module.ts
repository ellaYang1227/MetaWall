import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsGroupModule } from '@components/posts-group/posts-group.module';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PostsGroupModule
  ]
})
export class IndexModule {
}
