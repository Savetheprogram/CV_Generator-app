import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CvFormComponent } from './cv-form/cv-form.component';
import { CvDisplayComponent } from './cv-display/cv-display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CvTemplatesComponent } from './cv-templates/cv-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    CvDisplayComponent,
    NavbarComponent,
    CvTemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
