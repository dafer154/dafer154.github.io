import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { AppRoutingModule } from './app-routing.module';

// Keys
import { googleMapsKey } from './app.keys';

//Dependecies
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillComponent } from './pages/skill/skill.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import {ContactComponent} from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsKey})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
