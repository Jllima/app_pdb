import React from 'react'
import {TextInputProps} from 'react-native'
import {TextInput} from './styles'

const TextAreaInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <TextInput
      multiline={true}
      numberOfLines={5}
      placeholderTextColor="grey"
      {...props}
    />
  )
}

export default TextAreaInput
