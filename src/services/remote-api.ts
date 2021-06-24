import {Platform} from 'react-native'

const host = Platform.select({
  ios: 'localhost',
  android: '10.0.2.2',
})

export const basUrl = `http://${host as string}:3003`
