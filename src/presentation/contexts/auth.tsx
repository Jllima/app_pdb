import React, {createContext, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'

interface AuthContextData {
  token: string
  confirmation: boolean
  saveAccount: (accesaToken: string) => Promise<void>
}

type TokenData = {
  name: string
  confirmation: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState({
    accessToken: '',
    userName: '',
    confirmation: false,
    isLoading: false,
  })

  const saveAccount = async (accessToken: any): Promise<void> => {
    try {
      const {name, confirmation} = jwtDecode<TokenData>(accessToken)
      await AsyncStorage.multiSet([
        ['@pdb:access_token', accessToken],
        ['@pdb:user_name', name],
      ])

      setData({
        ...data,
        accessToken,
        userName: name,
        confirmation,
        isLoading: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token: data.accessToken,
        saveAccount,
        confirmation: data.confirmation,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
