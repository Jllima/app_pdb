import {UserDataModel} from '@pdb/domain/models/user-model'

export type ConfirmParams = {
  password: string
  password_confirmation: string
}

export type ConfirmDataParams = {
  data: ConfirmParams
}

export interface Authentication {
  confirm: (params: ConfirmDataParams) => Promise<UserDataModel>
}
