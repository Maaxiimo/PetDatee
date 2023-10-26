import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'dm',
    loadChildren: () => import('./dm/dm.module').then( m => m.DMPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  //{
  //  path: '**',
  //  loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  //},
  {
    path: 'product-add',
    loadChildren: () => import('./productos/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./productos/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./productos/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./productos/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./productos/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./usuarios/user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-all',
    loadChildren: () => import('./usuarios/user-all/user-all.module').then( m => m.UserAllPageModule)
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./usuarios/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./usuarios/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./usuarios/user-list/user-list.module').then( m => m.UserListPageModule)
  },  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
