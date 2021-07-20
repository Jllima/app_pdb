import React, {createContext, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'
import {UserModel} from '@pdb/domain/models/user-model'
interface AuthContextData {
  token: string
  user: UserModel
  saveAccount: (accesaToken: string) => Promise<void>
  signOut: () => Promise<void>
  updateStateAccount: (user: UserModel) => void
}

type TokenData = {
  user_id: string
  name: string
  confirmation: boolean
}

type StateData = {
  accessToken: string
  user: UserModel
  isLoading?: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<StateData>({} as StateData)
  const saveAccount = async (accessToken: any): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const {user_id, name, confirmation} = jwtDecode<TokenData>(accessToken)

      await AsyncStorage.multiSet([
        ['@pdb:access_token', accessToken],
        ['@pdb:user_name', name],
      ])

      setData({
        ...data,
        accessToken,
        user: {
          id: user_id,
          employee_name: name,
          confirmation,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateStateAccount = (user: UserModel): void => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {id, employee_name, confirmation} = user

    setData({
      ...data,
      user: {
        id,
        employee_name,
        confirmation,
      },
    })
  }

  const signOut = async (): Promise<void> => {
    await AsyncStorage.multiRemove(['@pdb:access_token', '@pdb:user_name'])

    setData({} as StateData)
  }

  return (
    <AuthContext.Provider
      value={{
        token: data.accessToken,
        saveAccount,
        signOut,
        updateStateAccount,
        user: data.user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
