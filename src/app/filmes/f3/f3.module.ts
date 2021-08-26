import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F3PageRoutingModule } from './f3-routing.module';

import { F3Page } from './f3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F3PageRoutingModule
  ],
  declarations: [F3Page]
})
export class F3PageModule {}
