import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 /*  {
    path: 'tab1-jarduerak',
    loadChildren: () => import('./tab1-jarduerak/tab1-jarduerak.module').then( m => m.Tab1JarduerakPageModule)
  }, */
  {
    path: 'kluba-gehitu',
    loadChildren: () => import('./kluba-gehitu/kluba-gehitu.module').then( m => m.KlubaGehituPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
