import {OrderDataModel} from '@pdb/domain/models/order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export interface GetOrder {
  get: () => Promise<OrderDataModel | ErrorsDetailsModel>
}
