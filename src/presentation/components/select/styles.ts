/* eslint-disable prettier/prettier */
import styled, {css} from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import {RectButton} from 'react-native-gesture-handler'
import {Icon} from 'native-base'
import {Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

type ContainerProps = {
  isFocused: boolean
}

const Container = styled(RectButton)`
  paddingHorizontal: 20px;
  paddingVertical: 13px;
  borderRadius: 25px;
  backgroundColor: ${Colors.ligthGrey};
  alignSelf: stretch;
  marginHorizontal: 20px;
  marginTop: 15px;
  flexDirection: row;
  justify-content: space-between;
  align-items: center;
  marginBottom: 25px;
`

const ButtonText = styled.Text`
  color: ${Colors.darkGrey};
  fontSize: 16px;
  width: ${width - 100}px
`
const IconButtom = styled(Icon)`
  margin-left: 5px;
  color: ${Colors.darkGrey}
  font-size: 16px;
`

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 12px;
  border-bottom-color: ${Colors.ligthGrey};
  border-bottom-width: 1px;
  padding-bottom: 12px
`

const ModalTitle = styled.Text`
  font-size: 17px;
  color: ${Colors.darkGrey};
`

const ModalCancel = styled.Text`
  font-size: 15px;
  color: ${Colors.primaryColor};
  font-weight: 600;
`

const ElementOption = styled.TouchableOpacity<ContainerProps>`
  padding: 20px;
  border-bottom-color: ${Colors.ligthGrey};
  border-bottom-width: 1px;
  ${props =>
    props.isFocused &&
    css`
      background-color: ${Colors.ligthGrey};
    `}
`

const ElementText = styled.Text`
  font-size: 17px;
  color: ${Colors.darkGrey}
`


export {Container, ButtonText, IconButtom, ModalHeader, ModalTitle, ModalCancel, ElementOption, ElementText}
