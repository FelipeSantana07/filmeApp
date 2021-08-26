import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F2Page } from './f2.page';

const routes: Routes = [
  {
    path: '',
    component: F2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F2PageRoutingModule {}
