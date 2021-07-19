import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {ListOrdersOpenedsAndCloseds} from '@pdb/domain/usecases/orders/list-orders-openeds-anc-closeds-orders'
import {ListOrdersOpenedsAndClosedsModel} from '@pdb/domain/models/order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'

export class RemoteListOrdersOpenedsAndCloseds
  implements ListOrdersOpenedsAndCloseds
{
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async get(): Promise<ListOrdersOpenedsAndClosedsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode === StatusCode.ok)
      return httpResponse.body as ListOrdersOpenedsAndClosedsModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
