import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemUserDataLoadingComponent } from './item-user-data-loading/item-user-data-loading.component';
import { ItemUserDataComponent } from './item-user-data/item-user-data.component';

@NgModule({
  declarations: [
    ItemUserDataComponent,
    ItemUserDataLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItemUserDataComponent,
    ItemUserDataLoadingComponent
  ]
})
export class ItemUserModule { }
