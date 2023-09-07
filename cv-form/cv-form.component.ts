import { Component } from '@angular/core';
import {UserDataModel} from "../shared/user-data.model";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent {
  userData: UserDataModel = {
    name: "",
    surname: "",
    email: "",
    address: "",
    phoneNumber: null
  }
  jobExperienceInputs: number[] = []

  onAddJobExperience(){
    this.jobExperienceInputs.push(1)
  }
}
