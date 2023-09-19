import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvFormComponent} from "./cv-form/cv-form.component";
import {CvTemplatesComponent} from "./cv-templates/cv-templates.component";

const routes: Routes = [
  {path: 'form', component: CvFormComponent},
  {path: 'templates', component: CvTemplatesComponent},
  {path: '', component: CvFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
