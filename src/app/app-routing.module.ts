
import { NgModule } from '@angular/core';


import {Routes, RouterModule} from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const app_routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'skill', component: SkillComponent},
    {path: 'contact', component: ContactComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}


];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }