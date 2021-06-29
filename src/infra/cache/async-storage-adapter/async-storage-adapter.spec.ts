import AsyncStorage from '@react-native-community/async-storage'
import faker from 'faker'
import {AsyncStorageAdapter} from './async-storage-adapter'

const makeSut = (): AsyncStorageAdapter => new AsyncStorageAdapter()

describe('AsyncStorageAdapter', () => {
  beforeEach(() => {
    AsyncStorage.clear()
  })

  it('Should call AsyncStorage.getItem with correct value', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value: any = faker.random.objectElement<{}>()
    const getItemSpy = jest
      .spyOn(AsyncStorage, 'getItem')
      .mockReturnValueOnce(value)

    const obj = await sut.get(key)

    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })
})
