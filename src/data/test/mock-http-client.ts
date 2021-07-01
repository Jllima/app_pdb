import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  StatusCode,
} from '@pdb/domain/protocols/http'

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
