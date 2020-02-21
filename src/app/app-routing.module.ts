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
  },
  {
    path: 'login-4',
    loadChildren: './login4/login4.module#Login4PageModule'
  },
  {
    path: 'project-list',
    loadChildren: './project-list/project-list.module#ProjectListPageModule'
  },
  {
    path: 'tasklist',
    loadChildren: './tasklist/tasklist.module#TasklistPageModule'
  },
  {
    path: 'task-details',
    loadChildren: './task-details/task-details.module#TaskDetailsPageModule'
  },
  {
    path: 'message-list',
    loadChildren: './message-list/message-list.module#MessageListPageModule'
  },
  {
    path: 'login-5',
    loadChildren: './login5/login5.module#Login5PageModule'
  },
  {
    path: 'pdf-demo',
    loadChildren: './pdf-demo/pdf-demo.module#PdfDEmoPageModule'
  },
  {
    path: 'demo-modal',
    loadChildren: './demo-modal/demo-modal.module#DemoModalPageModule'
  },  { path: 'form-wizard', loadChildren: './form-wizard/form-wizard.module#FormWizardPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
