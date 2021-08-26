import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F5Page } from './f5.page';

const routes: Routes = [
  {
    path: '',
    component: F5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F5PageRoutingModule {}
