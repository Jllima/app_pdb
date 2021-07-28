import React from 'react'
import {TextInputProps} from 'react-native'
import {TextInput} from './styles'

interface InputProps extends TextInputProps {
  placeholderTextColor?: string
  fontWeight?: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return <TextInput {...props} />
}

export default Input
