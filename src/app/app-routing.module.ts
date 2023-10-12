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
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },  {
    path: 'mascota-add',
    loadChildren: () => import('./mascota/mascota-add/mascota-add.module').then( m => m.MascotaAddPageModule)
  },
  {
    path: 'mascota-all',
    loadChildren: () => import('./mascota/mascota-all/mascota-all.module').then( m => m.MascotaAllPageModule)
  },
  {
    path: 'mascota-detail',
    loadChildren: () => import('./mascota/mascota-detail/mascota-detail.module').then( m => m.MascotaDetailPageModule)
  },
  {
    path: 'mascota-edit',
    loadChildren: () => import('./mascota/mascota-edit/mascota-edit.module').then( m => m.MascotaEditPageModule)
  },
  {
    path: 'mascota-list',
    loadChildren: () => import('./mascota/mascota-list/mascota-list.module').then( m => m.MascotaListPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./usuario/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./usuario/agregar/agregar.module').then( m => m.AgregarPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
