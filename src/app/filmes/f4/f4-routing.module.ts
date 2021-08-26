import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F4Page } from './f4.page';

const routes: Routes = [
  {
    path: '',
    component: F4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F4PageRoutingModule {}
