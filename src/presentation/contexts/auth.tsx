import React, {createContext, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'
import {UserModel} from '@pdb/domain/models/user-model'
interface AuthContextData {
  token: string
  user: UserModel
  isGoBack: boolean
  saveAccount: (accesaToken: string) => Promise<void>
  signOut: () => Promise<void>
  updateStateAccount: (user: UserModel) => void
  setGoBack: (isBack: boolean) => void
}

type TokenData = {
  user_id: string
  name: string
  confirmation: boolean
  occupation: string
}

type StateData = {
  accessToken: string
  user: UserModel
  isLoading?: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<StateData>({} as StateData)
  const [isGoBack, setIsGoBack] = useState(false)

  const saveAccount = async (accessToken: any): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const {user_id, name, confirmation, occupation} =
        jwtDecode<TokenData>(accessToken)

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
          occupation,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateStateAccount = async (user: UserModel): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {id, employee_name, confirmation, occupation} = user

    setData({
      ...data,
      user: {
        id,
        employee_name,
        confirmation,
        occupation,
      },
    })
  }

  const setGoBack = (value: boolean): void => {
    setIsGoBack(value)
  }

  const signOut = async (): Promise<void> => {
    await AsyncStorage.multiRemove(['@pdb:access_token', '@pdb:user_name'])

    setData({} as StateData)
  }

  return (
    <AuthContext.Provider
      value={{
        token: data.accessToken,
        isGoBack,
        saveAccount,
        signOut,
        updateStateAccount,
        setGoBack,
        user: data.user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
