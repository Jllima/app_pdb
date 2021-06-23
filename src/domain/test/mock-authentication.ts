import {AuthParams} from '../usecases/auth/authentication'
import faker from 'faker'

export const mockAuthenticationParams = (): AuthParams => ({
  identity: faker.internet.email(),
  password: faker.internet.password(),
})
