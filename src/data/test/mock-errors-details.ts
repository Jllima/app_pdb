import faker from 'faker'
import {ErrorsDetailsModel} from '@pdb/data/models'

export const mockErrorsDetails = (): ErrorsDetailsModel => {
  return {
    title: faker.name.title(),
    status: faker.name.title(),
    errors: [
      {
        resource: faker.name.title(),
        field: faker.database.column(),
        detail: faker.lorem.sentence(),
      },
      {
        resource: faker.name.title(),
        field: faker.database.column(),
        detail: faker.lorem.sentence(),
      },
    ],
  }
}
