import {GetStorage} from '@pdb/domain/protocols/cache'
import AsyncStorage from '@react-native-community/async-storage'

export class AsyncStorageAdapter implements GetStorage {
  async get(key: string): Promise<any> {
    return await AsyncStorage.getItem(key)
  }
}
