import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { GuestGuard } from '@guard/guest.guard';

const routes: Routes = [
  {
    path: 'index',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/index/index.module').then(mod => mod.IndexModule)
  }, {
    path: 'post',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/post/post.module').then(mod => mod.PostModule)
  }, {
    path: 'addPost',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/add-post/add-post.module').then(mod => mod.AddPostModule)
  }, {
    path: 'etidPost/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/add-post/add-post.module').then(mod => mod.AddPostModule)
  }, {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/user-posts/user-posts.module').then(mod => mod.UserPostsModule)
  }, {
    path: 'member',
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/member/member.module').then(mod => mod.MemberModule)
  }, {
    path: '',
    canActivate: [GuestGuard],
    loadChildren: () => import('@pages/sign/sign.module').then(mod => mod.SignModule)
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
