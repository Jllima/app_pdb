import React, {createContext, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData {
  signed: boolean
  token: string
  saveAccount: (accesaToken: string) => Promise<void>
}

type AuthData = {
  token: string
  nameUser: string
  confirmation: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthData>({} as AuthData)

  const saveAccount = async (accessToken: any): Promise<void> => {
    try {
      await AsyncStorage.multiSet([
        '@Pdb:access_token',
        JSON.parse(accessToken),
      ])

      setData({...data, token: accessToken})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{signed: false, token: '', saveAccount}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
