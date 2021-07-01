/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import { RectButton } from 'react-native-gesture-handler'
import {Icon} from 'native-base'

const Container = styled(RectButton)`
  paddingHorizontal: 20px;
  paddingVertical: 13px;
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
const IconButtom = styled(Icon)`
  margin-left: 5px;
  color: ${Colors.write}
  font-size: 20px;
`

export {Container, ButtonText, IconButtom}
