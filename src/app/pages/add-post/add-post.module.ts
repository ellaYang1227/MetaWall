import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleModule } from './../../components/title/title.module';
import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddPostRoutingModule,
    TitleModule
  ]
})
export class AddPostModule {
}
