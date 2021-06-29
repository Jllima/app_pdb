import {ForbiddenError, UnexpectedError} from '@pdb/domain/errors'
import {UserDataModel} from '@pdb/domain/models/user-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'
import {
  Confirmation,
  ConfirmDataParams,
} from '@pdb/domain/usecases/confirm/confirmation'

export class RemoteConfirmation implements Confirmation {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<UserDataModel>,
  ) {}

  async confirm(params: ConfirmDataParams): Promise<UserDataModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    switch (httpResponse.statusCode) {
      case StatusCode.created:
        return httpResponse.body as UserDataModel
      case StatusCode.unauthorized:
        throw new ForbiddenError()
      default:
        throw new UnexpectedError()
    }
  }
}
