import React, {createContext} from 'react'

type AuthContextData = {
  signed: boolean
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => (
  <AuthContext.Provider value={{signed: false, token: ''}}>
    {children}
  </AuthContext.Provider>
)

export default AuthContext
