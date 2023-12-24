import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { HomeComponent } from './componenti/home/home.component';
import { AttivitaComponent } from './componenti/attivita/attivita.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { PresentazioneComponent } from './componenti/presentazione/presentazione.component';
import { AuthGuard } from './auth/auth.guard';
import { NewsletterComponent } from './componenti/newsletter/newsletter.component';
import { EventiComponent } from './componenti/eventi/eventi.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'attivita', component: AttivitaComponent },
    { path: 'contatti', component: ContattiComponent },
    { path: 'presentazione', component: PresentazioneComponent},
    { path: 'newsletter', component: NewsletterComponent},
    { path: 'eventi', component: EventiComponent},
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
