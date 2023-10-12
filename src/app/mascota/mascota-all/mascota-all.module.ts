import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotaAllPageRoutingModule } from './mascota-all-routing.module';

import { MascotaAllPage } from './mascota-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotaAllPageRoutingModule
  ],
  declarations: [MascotaAllPage]
})
export class MascotaAllPageModule {}
