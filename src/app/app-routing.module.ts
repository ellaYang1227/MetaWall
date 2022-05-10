import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('@pages/index/index.module').then(mod => mod.IndexModule)
  }, {
    path: 'addPost',
    loadChildren: () => import('@pages/add-post/add-post.module').then(mod => mod.AddPostModule)
  }, {
    path: '**', redirectTo: '/index', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 110],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
