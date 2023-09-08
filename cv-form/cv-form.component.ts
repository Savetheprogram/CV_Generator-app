import {Component, OnInit} from '@angular/core';
import {UserJobExperienceDataModel, UserPersonalDataModel} from "../shared/user-personal-data.model";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit{
  title: string
  employer: string
  began: Date
  ended: Date | string
  userData: UserPersonalDataModel = {
    name: "",
    surname: "",
    email: "",
    address: "",
    phoneNumber: null,
  }
  userExperienceData: UserJobExperienceDataModel = {
    jobTitle: '',
    workExperience: {
      title: '',
      employer: '',
      began: new Date(),
      ended: new Date(),
    },
    skills: ''
  }
  jobExperienceInputs: number[] = []
  skillsInputs: number[] = []
  hobbyInputs: number[] = []

  ngOnInit() {

  }



  onAddJobExperience(){
    this.jobExperienceInputs.push(1)
  }
  onAddSkills() {
    this.skillsInputs.push(1)
  }
  onAddHobby() {
    this.hobbyInputs.push(1)
  }
}
