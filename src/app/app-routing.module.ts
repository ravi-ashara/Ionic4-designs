import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-1',
    pathMatch: 'full'
  },
  {
    path: 'login-1',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login-2',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'food-list',
    loadChildren: './food-list/food-list.module#FoodListPageModule'
  },
  {
    path: 'login-3',
    loadChildren: './login3/login3.module#Login3PageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }