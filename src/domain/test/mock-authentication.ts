import {AuthParams} from '../usecases/auth/authentication'
import faker from 'faker'
import {AccountModel} from '../models/account-model'

export const mockAccountModel = (): AccountModel => ({
  auth_token: faker.random.alphaNumeric(),
})

export const mockAuthenticationParams = (): AuthParams => ({
  identity: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAuthenticationModel = (): AccountModel => mockAccountModel()
