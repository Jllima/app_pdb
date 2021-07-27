import {ListToEditOrderModel} from '@pdb/domain/models/list-to-edit-order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export interface EditOrder {
  edit: () => Promise<ListToEditOrderModel | ErrorsDetailsModel>
}
