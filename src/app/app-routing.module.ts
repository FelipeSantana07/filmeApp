import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'f1',
    loadChildren: () => import('./filmes/f1/f1.module').then( m => m.F1PageModule)
  },
  {
    path: 'f2',
    loadChildren: () => import('./filmes/f2/f2.module').then( m => m.F2PageModule)
  },
  {
    path: 'f3',
    loadChildren: () => import('./filmes/f3/f3.module').then( m => m.F3PageModule)
  },
  {
    path: 'f4',
    loadChildren: () => import('./filmes/f4/f4.module').then( m => m.F4PageModule)
  },
  {
    path: 'f5',
    loadChildren: () => import('./filmes/f5/f5.module').then( m => m.F5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
