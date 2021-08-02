import {HttpClientSpy, mockErrorsDetails} from '@pdb/data/test'
import {DetailError} from '@pdb/domain/errors'
import {StatusCode} from '@pdb/domain/protocols/http'
import {mockCreateOrderParams} from '@pdb/domain/test/mock-create-os'
import faker from 'faker'
import {RemoteManageOs} from './remote-manage-order'

type SutTypes = {
  sut: RemoteManageOs
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteManageOs(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteManageOs', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const {sut, httpClientSpy} = makeSut(url)
    httpClientSpy.response = {
      statusCode: StatusCode.noContent,
    }
    const oderParams = mockCreateOrderParams()

    await sut.manage(oderParams)

    expect(httpClientSpy.url).toEqual(url)
    expect(httpClientSpy.method).toBe('put')
    expect(httpClientSpy.body).toEqual(oderParams)
  })

  it('Should throw UnprocessableEntityError if HttpClient returns 422', async () => {
    const {sut, httpClientSpy} = makeSut()
    const errorsDetails = mockErrorsDetails()
    httpClientSpy.response = {
      statusCode: StatusCode.unprocessableEntity,
    }

    const promise = sut.manage(mockCreateOrderParams())

    await expect(promise).rejects.toThrow(new DetailError(errorsDetails))
  })
})
