import {AccountModel} from '@pdb/domain/models/account-model'

type AuthParams = {
  identity: string
  password: string
}

export interface Authentication {
  auth: (params: AuthParams) => Promise<AccountModel>
}
