import {HttpClientSpy} from '@pdb/data/test'
import {StatusCode} from '@pdb/domain/protocols/http'
import {mockConfirmationParams} from '@pdb/domain/test/mock-confirmation'
import faker from 'faker'
import {RemoteConfirmation} from './remote-confirmation'

type SutTypes = {
  sut: RemoteConfirmation
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteConfirmation(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteConfirmation', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response.statusCode = StatusCode.created
    const authenticationParams = mockConfirmationParams()

    await sut.confirm(authenticationParams)

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })
})
