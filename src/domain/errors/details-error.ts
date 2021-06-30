import {ErrorsDetailsModel, ErrorsModel} from '@pdb/data/models'
import {GetMessageError} from '@pdb/domain/errors'

export class DetailError extends Error implements GetMessageError {
  constructor(private readonly errorObject: ErrorsDetailsModel) {
    super('Não foi possível realiza a ação!')
    this.name = 'DetailError'
  }

  getErrors(): ErrorsModel[] {
    return this.errorObject.errors
  }
}
