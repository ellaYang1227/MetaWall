import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsGroupModule } from '@components/posts-group/posts-group.module';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    PostsGroupModule
  ]
})
export class PostModule { }
