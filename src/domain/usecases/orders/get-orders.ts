import {OrdersModel} from '@pdb/domain/models/order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export interface GetOrders {
  get: () => Promise<OrdersModel | ErrorsDetailsModel>
}
