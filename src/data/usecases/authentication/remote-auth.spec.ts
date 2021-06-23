import {AccountModel} from '@pdb/domain/models/account-model'
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  StatusCode,
} from '@pdb/domain/protocols/http'
import {mockAuthenticationParams} from '@pdb/domain/test/mock-authentication'
import {AuthParams} from '@pdb/domain/usecases/auth/authentication'

import faker from 'faker'

export class HttpClientSpy<R = any> implements HttpClient {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: StatusCode.ok,
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers

    return this.response
  }
}

export class RemoteAuth {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>,
  ) {}

  async auth(params: AuthParams): Promise<void> {
    this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })
  }
}

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
})
