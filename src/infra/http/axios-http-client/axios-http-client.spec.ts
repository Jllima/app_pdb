import {mockAxios} from '@pdb/infra/test'
import {mockHttpRequest} from '@pdb/data/test/mock-http'
import {AxiosHttpClient} from './axios-http-client'

import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  test('should ', async () => {
    const request = mockHttpRequest()
    const {sut, mockedAxios} = makeSut()

    await sut.request(request)

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method,
    })
  })

  test('Should return correct response', async () => {
    const {sut, mockedAxios} = makeSut()

    const httpResponse = await sut.request(mockHttpRequest())
    const axiosResponse = await mockedAxios.request.mock.results[0].value

    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    })
  })
})
