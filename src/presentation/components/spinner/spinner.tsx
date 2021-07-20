import React from 'react'
import {ActivityIndicator} from 'react-native'
import {Container} from './styles'
import Colors from '@pdb/presentation/styles/colors'

const Spinner: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={Colors.primaryColor} />
    </Container>
  )
}

export default Spinner
