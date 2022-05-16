import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './layout/body/body.component';

const routes: Routes = [
  {
    path: '', 
    component: BodyComponent,
    children: [
      {
        path: 'panel', 
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
