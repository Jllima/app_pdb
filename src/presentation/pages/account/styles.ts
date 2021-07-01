/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import {Icon} from 'native-base'
import { RectButton } from 'react-native-gesture-handler'

const Container = styled(RectButton)`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 25px;
  backgroundColor: ${Colors.red};
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
const IconNb = styled(Icon)`
  margin-left: 10px;
  font-size: 25px;
  color: ${Colors.write}
`

export {Container, ButtonText, IconNb}
