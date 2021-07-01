import {ErrorsDetailsModel, ErrorsModel} from '@pdb/data/models'

export interface HandleErrors {
  handleErrors: (error: ErrorsDetailsModel) => ErrorsModel[]
}

export interface GetMessageError {
  name: string
  message: string
  getErrors: () => ErrorsModel[] | string
}
