import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './layout/body/body.component';
import { AboutComponent } from './views/about/about.component'
import { ServiceComponent } from './views/service/service.component'
import { ContactComponent } from './views/contact/contact.component'
import { PortfolioComponent } from './views/portfolio/portfolio.component'

const routes: Routes = [
  {
    path: '', 
    component: BodyComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'service',
        component: ServiceComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
