import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {EditOrder} from '@pdb/domain/usecases/orders/edit-order'
import {ListToEditOrderModel} from '@pdb/domain/models/list-to-edit-order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'

export class RemoteEditOrder implements EditOrder {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async edit(): Promise<ListToEditOrderModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode === StatusCode.ok)
      return httpResponse.body as ListToEditOrderModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
