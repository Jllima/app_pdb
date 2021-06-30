import {ErrorsDetailsModel, ErrorsModel} from '@pdb/data/models'

export class UnprocessableEntityError extends Error {
  constructor(private readonly errors: ErrorsDetailsModel) {
    super('Dados inválidos')
    this.name = 'UnprocessableEntityError'
  }

  getErrors(): ErrorsModel[] {
    return this.errors.errors
  }
}
