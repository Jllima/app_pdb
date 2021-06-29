import faker from 'faker'
import {UserDataModel} from '../models/user-model'
import {ConfirmDataParams} from '../usecases/confirm/confirmation'

export const mockUserDataModel = (): UserDataModel => ({
  data: {
    id: '1',
    confirmation: true,
    identity: 'user_1',
    name: 'Usuário 1',
  },
})

export const mockConfirmationParams = (): ConfirmDataParams => {
  const password: string = faker.internet.password()

  return {
    data: {
      password: password,
      password_confirmation: password,
    },
  }
}

export const mockConfirmationModel = (): UserDataModel => mockUserDataModel()
