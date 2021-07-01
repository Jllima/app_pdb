import {mockErrorsDetails} from '@pdb/data/test'
import {DetailError, InvalidCredentialsError} from '@pdb/domain/errors'
import {ApiHandleError} from './api-handle-errors'

describe('Shold ', () => {
  it('should return ErrorDetailModel if errors object', () => {
    const sut = new ApiHandleError()
    const errorsDetails = mockErrorsDetails()

    const errors = sut.handleErrors(new DetailError(errorsDetails))

    expect(errors).toMatchObject(errorsDetails.errors)
  })

  it('should return message error if InvalidCredentialsError', () => {
    const sut = new ApiHandleError()
    const error = new InvalidCredentialsError()

    const errors = sut.handleErrors(error)

    expect(errors).toEqual(error.message)
  })
})
