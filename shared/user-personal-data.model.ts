export type UserPersonalDataModel = {
  name: string,
  surname: string,
  email: string,
  phoneNumber: number
  address: string
}

export type UserJobExperienceDataModel = {
    jobTitle?: string,
    workExperience?: {
      title: string,
      employer: string,
      began: Date,
      ended: Date | string,
    },
    skills?: string
}

