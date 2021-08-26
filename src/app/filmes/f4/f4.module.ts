import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F4PageRoutingModule } from './f4-routing.module';

import { F4Page } from './f4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F4PageRoutingModule
  ],
  declarations: [F4Page]
})
export class F4PageModule {}
