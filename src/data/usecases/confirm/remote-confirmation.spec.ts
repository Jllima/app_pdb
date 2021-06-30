import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {UnprocessableEntityError} from '@pdb/domain/errors'
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
    httpClientSpy.response = {
      statusCode: StatusCode.created,
    }
    const authenticationParams = mockConfirmationParams()

    await sut.confirm(authenticationParams)

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })

  it('Should throw UnprocessableEntityError if HttpClient returns 422', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.unprocessableEntity,
    }

    const promise = sut.confirm(mockConfirmationParams())

    await expect(promise).rejects.toThrow(
      new UnprocessableEntityError(errorsDetails),
    )
  })
})
