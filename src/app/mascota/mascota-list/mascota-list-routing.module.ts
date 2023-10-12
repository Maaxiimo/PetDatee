import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotaListPage } from './mascota-list.page';

const routes: Routes = [
  {
    path: '',
    component: MascotaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotaListPageRoutingModule {}
