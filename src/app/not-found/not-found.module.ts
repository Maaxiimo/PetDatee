import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { IonicModule } from '@ionic/angular';


import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFoundPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}