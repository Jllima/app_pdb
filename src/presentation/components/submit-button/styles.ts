/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler'

const Container = styled(RectButton)`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 25px;
  backgroundColor: ${Colors.primaryColor};
  alignSelf: stretch;
  marginHorizontal: 20px;
  marginTop: 15px;
  flexDirection: row;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  color: ${Colors.write};
  fontWeight: bold;
  fontSize: 18px;
  textAlign: center;
`
const Icon = styled(FeatherIcon)`
  margin-left: 5px;
`

export {Container, ButtonText, Icon}
