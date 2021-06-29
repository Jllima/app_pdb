export type UserModel = {
  id: number
  confirmation: boolean
  identity: string
  name: string
}

export type UserDataModel = {
  data: UserModel
}
