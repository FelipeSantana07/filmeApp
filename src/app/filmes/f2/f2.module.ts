import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F2PageRoutingModule } from './f2-routing.module';

import { F2Page } from './f2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F2PageRoutingModule
  ],
  declarations: [F2Page]
})
export class F2PageModule {}
