import {ListOrdersOpenedsAndClosedsModel} from '@pdb/domain/models/order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export interface ListOrdersOpenedsAndCloseds {
  get: () => Promise<ListOrdersOpenedsAndClosedsModel | ErrorsDetailsModel>
}
