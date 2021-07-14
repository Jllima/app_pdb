import React, {useState} from 'react'
import {
  Container,
  ButtonText,
  IconButtom,
  ModalHeader,
  ModalTitle,
  ModalCancel,
  ElementOption,
  ElementText,
} from './styles'
import {RectButtonProperties} from 'react-native-gesture-handler'
import {Modal, TouchableOpacity, SafeAreaView, FlatList} from 'react-native'
import {Icon} from 'native-base'

interface ButtonProps extends RectButtonProperties {
  txt: string
  options: any
}

const Select: React.FC<ButtonProps> = ({options, txt, ...rest}) => {
  const [state, setState] = useState({
    text: txt,
    modalVisible: false,
    isFocused: false,
    isSelected: '',
  })

  const renderOptions = (item: any): any => {
    return (
      <ElementOption
        isFocused={state.isFocused}
        onPress={() => {
          setState({
            ...state,
            text: item.description,
            modalVisible: false,
            isSelected: item.id,
          })
        }}>
        <ElementText>{item.description}</ElementText>
      </ElementOption>
    )
  }

  return (
    <>
      <Container
        {...rest}
        onPress={() => setState({...state, modalVisible: true})}>
        <ButtonText numberOfLines={1}>{state.text}</ButtonText>
        <IconButtom name="chevron-down" />
      </Container>
      <Modal
        animationType="slide"
        visible={state.modalVisible}
        onRequestClose={() => setState({...state, modalVisible: false})}>
        <SafeAreaView>
          <ModalHeader>
            <TouchableOpacity
              onPress={() => setState({...state, modalVisible: false})}>
              <Icon name="chevron-back" />
            </TouchableOpacity>
            <ModalTitle>{state.text}</ModalTitle>
            <TouchableOpacity
              onPress={() => setState({...state, modalVisible: false})}>
              <ModalCancel>Fechar</ModalCancel>
            </TouchableOpacity>
          </ModalHeader>
          <FlatList
            data={options}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => renderOptions(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default Select
