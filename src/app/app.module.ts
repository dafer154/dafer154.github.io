import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Dependecies
import { RoundProgressModule } from 'angular-svg-round-progressbar';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillComponent } from './pages/skill/skill.component';
import { EducationComponent } from './pages/education/education.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MapComponent } from './shared/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillComponent,
    EducationComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
