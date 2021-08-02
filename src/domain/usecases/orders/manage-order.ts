import {ErrorsDetailsModel} from '@pdb/data/models'
import {StatusCode} from '@pdb/domain/protocols/http'

export type ManageOrderParams = FormData

export interface ManageOrder {
  manage: (
    params: ManageOrderParams,
  ) => Promise<StatusCode | ErrorsDetailsModel>
}
