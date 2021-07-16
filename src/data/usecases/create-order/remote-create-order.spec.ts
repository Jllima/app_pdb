import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {DetailError} from '@pdb/domain/errors'
import {StatusCode} from '@pdb/domain/protocols/http'
import {mockCreateOrderParams} from '@pdb/domain/test/mock-create-os'
import faker from 'faker'
import {RemoteCreateOs} from './remote-create-order'

type SutTypes = {
  sut: RemoteCreateOs
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteCreateOs(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteCreateOs', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response = {
      statusCode: StatusCode.created,
    }
    const oderParams = mockCreateOrderParams()

    await sut.create(oderParams)

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(oderParams)
  })

  it('Should throw UnprocessableEntityError if HttpClient returns 422', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.unprocessableEntity,
    }

    const promise = sut.create(mockCreateOrderParams())

    await expect(promise).rejects.toThrow(new DetailError(errorsDetails))
  })
})
