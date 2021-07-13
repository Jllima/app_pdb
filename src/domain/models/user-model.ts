export type UserModel = {
  id: string
  confirmation?: boolean
  username?: string
  name: string
}

export type UserDataModel = {
  data: UserModel
}
