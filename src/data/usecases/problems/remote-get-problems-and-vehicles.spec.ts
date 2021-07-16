import faker from 'faker'
import {DetailError} from '@pdb/domain/errors'
import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {StatusCode} from '@pdb/domain/protocols/http'
import {RemoteGetProblemsAndVehicles} from './remote-get-problems-and-vehicles'

type SutTypes = {
  sut: RemoteGetProblemsAndVehicles
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteGetProblemsAndVehicles(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteGetProblemsAndVehicles', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response = {
      statusCode: StatusCode.ok,
    }

    await sut.get()

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should throw UnprocessableEntityError if HttpClient returns 422', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.unprocessableEntity,
    }

    const promise = sut.get()

    await expect(promise).rejects.toThrow(new DetailError(errorsDetails))
  })
})
