import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './layout/body/body.component';
import { AboutComponent } from './views/about/about.component';
import { HeroComponent } from './component/hero/hero.component';
import { ServiceComponent } from './views/service/service.component';
import { ContactComponent } from './views/contact/contact.component';
import { AchievementCtaComponent } from './component/achievement-cta/achievement-cta.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BodyComponent,
    AboutComponent,
    HeroComponent,
    ServiceComponent,
    ContactComponent,
    AchievementCtaComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
