import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { NewsletterComponent } from './componenti/newsletter/newsletter.component';
import { HomeComponent } from './componenti/home/home.component';
import { AttivitaComponent } from './componenti/attivita/attivita.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { PresentazioneComponent } from './componenti/presentazione/presentazione.component';
import { RegisterComponent } from './componenti/register/register.component';
import { EventiComponent } from './componenti/eventi/eventi.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from '@angular/material/card';
import { DataService } from './services/data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    AttivitaComponent,
    ContattiComponent,
    NewsletterComponent,
    EventiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,

    HttpClientModule

  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
