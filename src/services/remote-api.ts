import {Platform} from 'react-native'

const host = Platform.select({
  ios: 'http://localhost:3003',
  // android: 'http://localhost:3003',
  android: 'https://apipdb.herokuapp.com',
})

export const basUrl = host
