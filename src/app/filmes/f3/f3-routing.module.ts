import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F3Page } from './f3.page';

const routes: Routes = [
  {
    path: '',
    component: F3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F3PageRoutingModule {}
