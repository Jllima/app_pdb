export type UserModel = {
  id: string
  confirmation?: boolean
  identity?: string
  name: string
}

export type UserDataModel = {
  data: UserModel
}
