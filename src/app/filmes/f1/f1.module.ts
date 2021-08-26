import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1PageRoutingModule } from './f1-routing.module';

import { F1Page } from './f1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F1PageRoutingModule
  ],
  declarations: [F1Page]
})
export class F1PageModule {}
