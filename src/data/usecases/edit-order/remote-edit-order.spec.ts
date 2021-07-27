import faker from 'faker'
import {DetailError} from '@pdb/domain/errors'
import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {StatusCode} from '@pdb/domain/protocols/http'
import {RemoteEditOrder} from './remote-edit-order'

type SutTypes = {
  sut: RemoteEditOrder
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteEditOrder(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteEditOrder', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response = {
      statusCode: StatusCode.ok,
    }

    await sut.edit()

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should throw UnprocessableEntityError if HttpClient returns 500', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.serverError,
    }

    const promise = sut.edit()

    await expect(promise).rejects.toThrow(new DetailError(errorsDetails))
  })
})
