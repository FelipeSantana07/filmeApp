import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F5PageRoutingModule } from './f5-routing.module';

import { F5Page } from './f5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F5PageRoutingModule
  ],
  declarations: [F5Page]
})
export class F5PageModule {}
