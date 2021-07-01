import {GetMessageError} from '@pdb/domain/errors'

enum ErrorMap {
  detailError = 'DetailError',
}

export class ApiHandleError {
  handleErrors(error: GetMessageError): any {
    switch (error.name) {
      case ErrorMap.detailError:
        return error.getErrors()
      default:
        return error.message
    }
  }
}
