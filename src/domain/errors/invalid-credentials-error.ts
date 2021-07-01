import {GetMessageError} from './handle-errors'

export class InvalidCredentialsError extends Error implements GetMessageError {
  constructor() {
    super('Usuário ou Senha inválidos')
    this.name = 'InvalidCredentialsError'
  }

  getErrors(): string {
    return this.message
  }
}
