import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DMPage } from './dm.page';

const routes: Routes = [
  {
    path: '',
    component: DMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DMPageRoutingModule {}
