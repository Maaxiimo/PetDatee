import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DMPageRoutingModule } from './dm-routing.module';

import { DMPage } from './dm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DMPageRoutingModule
  ],
  declarations: [DMPage]
})
export class DMPageModule {}
