import React, {createContext, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'

interface AuthContextData {
  token: string
  saveAccount: (accesaToken: string) => Promise<void>
}

type AuthData = {
  accessToken: string
  userName: string
  confirmation: boolean
}

type TokenData = {
  name: string
  confirmation: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthData>({} as AuthData)

  const saveAccount = async (accessToken: any): Promise<void> => {
    try {
      const {name, confirmation} = jwtDecode<TokenData>(accessToken)
      await AsyncStorage.multiSet([
        ['@pdb:access_token', accessToken],
        ['@pdb:user_name', name],
      ])

      setData({...data, accessToken, userName: name, confirmation})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{token: data.accessToken, saveAccount}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
