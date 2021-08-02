export type UserModel = {
  id: string
  confirmation?: boolean
  username?: string
  employee_name: string
  occupation: string
}

export type UserDataModel = {
  data: UserModel
}
