export type UserDataModel = {
  name: string,
  surname: string,
  email: string,
  phoneNumber: number
  address: string
  jobTitle?: string,
  workExperience?: [{
  title: string,
  employer: string,
  began: Date,
  ended: Date | string,
  }],
  skills?: string
}

