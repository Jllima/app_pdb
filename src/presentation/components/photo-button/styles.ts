/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import { RectButton } from 'react-native-gesture-handler'
import {Icon} from 'native-base'

const PhotoButtonContainer = styled(RectButton)`
  paddingVertical: 13px;
  width: 50%;
  borderRadius: 25px;
  backgroundColor: ${Colors.primaryColor};
  marginHorizontal: 20px;
  marginTop: 15px;
  marginBottom: 15px;
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

export {PhotoButtonContainer, ButtonText, IconButtom}
