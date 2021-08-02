import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import {Platform} from 'react-native'

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.darkGrey,
  fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
})`
  padding-horizontal: 20px;
  padding-vertical: 13px;
  border-radius: 25px;
  background-color: ${Colors.ligthGrey};
  align-self: stretch;
  margin-bottom: 25px;
  margin-horizontal: 20px;
  font-size: 16px;
  color: ${Colors.darkGrey};
  font-weight: 700;
`

export {TextInput}
