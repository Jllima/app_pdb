import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {UserDataModel} from '@pdb/domain/models/user-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'
import {
  Confirmation,
  ConfirmDataParams,
} from '@pdb/domain/usecases/confirm/confirmation'

export class RemoteConfirmation implements Confirmation {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<UserDataModel | ErrorsDetailsModel>,
  ) {}

  async confirm(params: ConfirmDataParams): Promise<UserDataModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    if (httpResponse.statusCode === StatusCode.created)
      return httpResponse.body as UserDataModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
