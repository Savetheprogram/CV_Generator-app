export type UserPersonalDataModel = {
  name: string,
  surname: string,
  email: string,
  phoneNumber: number
  address: string
}

export class UserJobExperienceDataModel {
    public  title: string
    public  employer: string
    public  began: Date
    public  ended: Date | string

  constructor(title: string, employer: string, began: Date, ended: Date | string) {
      this.title = title
      this.employer = employer
      this.began = began
      this.ended = ended
  }
}

