import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsGroupModule } from '@components/posts-group/posts-group.module';
import { UserPostsRoutingModule } from './user-posts-routing.module';
import { UserPostsComponent } from './user-posts.component';

@NgModule({
  declarations: [
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UserPostsRoutingModule,
    PostsGroupModule
  ]
})
export class UserPostsModule { }
