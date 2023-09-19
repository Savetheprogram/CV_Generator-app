import {Component, OnInit} from '@angular/core';
import {UserJobExperienceDataModel, UserPersonalDataModel} from "../shared/user-personal-data.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit{
  experience = []
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
  userExperienceData: UserJobExperienceDataModel

  jobExperienceInputs: number[] = []
  skillsInputs: number[] = []
  hobbyInputs: number[] = []
  person: UserJobExperienceDataModel

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
  onAddExperience(form: NgForm){
    const formValue = form.value
    this.person = new UserJobExperienceDataModel(
      formValue.title, formValue.employer, formValue.began, formValue.ended

    )
    this.experience.push(this.person)
  }
}
