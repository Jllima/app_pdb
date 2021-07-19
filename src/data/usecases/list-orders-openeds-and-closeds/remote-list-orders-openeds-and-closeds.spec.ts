import faker from 'faker'
import {DetailError} from '@pdb/domain/errors'
import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {StatusCode} from '@pdb/domain/protocols/http'
import {RemoteListOrdersOpenedsAndCloseds} from './remote-list-orders-openeds-and-closeds'

type SutTypes = {
  sut: RemoteListOrdersOpenedsAndCloseds
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteListOrdersOpenedsAndCloseds(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteListOrdersOpenedsAndCloseds', () => {
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

  it('Should throw UnprocessableEntityError if HttpClient returns 500', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.serverError,
    }

    const promise = sut.get()

    await expect(promise).rejects.toThrow(new DetailError(errorsDetails))
  })
})
