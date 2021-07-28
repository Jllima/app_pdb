import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.darkGrey,
  fontWeight: '700',
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
  font-weight: 600;
`

export {TextInput}
