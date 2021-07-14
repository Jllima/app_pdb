import {GetStorage} from '@pdb/domain/protocols/cache'
import {HttpClient, HttpRequest, HttpResponse} from '@pdb/domain/protocols/http'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient,
    private readonly contentType: string = 'application/json',
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const accessToken = await this.getStorage.get('@pdb:access_token')
    if (accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: accessToken,
          'Content-Type': this.contentType,
        }),
      })
    }
    const httpResponse = await this.httpClient.request(data)

    return httpResponse
  }
}
