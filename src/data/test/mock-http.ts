import faker from 'faker'
import {HttpRequest} from '@pdb/domain/protocols/http'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.alphaNumeric,
})

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
})
