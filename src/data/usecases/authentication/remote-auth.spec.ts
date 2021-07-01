import {InvalidCredentialsError} from '@pdb/domain/errors'
import {StatusCode} from '@pdb/domain/protocols/http'
import {
  mockAuthenticationModel,
  mockAuthenticationParams,
} from '@pdb/domain/test/mock-authentication'

import faker from 'faker'
import {RemoteAuth} from '@pdb/data/usecases'
import {HttpClientSpy} from '@pdb/data/test'

type SutTypes = {
  sut: RemoteAuth
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteAuth(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteAuth', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    const authenticationParams = mockAuthenticationParams()

    await sut.auth(authenticationParams)

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })

  it('Should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    const {sut, httpClientSpy} = makeSut()
    httpClientSpy.response = {
      statusCode: StatusCode.unauthorized,
    }

    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  it('Should return an AccountModel if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut()
    const httpResult = mockAuthenticationModel()
    httpClientSpy.response = {
      statusCode: StatusCode.ok,
      body: httpResult,
    }

    const account = await sut.auth(mockAuthenticationParams())

    expect(account).toEqual(httpResult)
  })
})
