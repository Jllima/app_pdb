export class InvalidCredentialsError extends Error {
  constructor() {
    super('Matrícula ou Senha inválida')
    this.name = 'InvalidCredentialsError'
  }
}
