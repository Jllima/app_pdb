import {GetStorage} from '@pdb/domain/protocols/cache'

import faker from 'faker'

export class GetStorageSpy implements GetStorage {
  key: string | undefined
  value: any = faker.random.objectElement()

  get(key: string): any {
    this.key = key
    return this.value
  }
}
