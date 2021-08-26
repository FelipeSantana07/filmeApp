import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F1Page } from './f1.page';

const routes: Routes = [
  {
    path: '',
    component: F1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F1PageRoutingModule {}
