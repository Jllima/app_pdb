import React, {useRef, useEffect} from 'react'
import {TextInputProps, Platform} from 'react-native'
import {TextInput} from './styles'

interface InputProps extends TextInputProps {
  placeholderTextColor?: string
  fontWeight?: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const inpuElementRef = useRef<any>(null)
  useEffect(() => {
    if (Platform.OS === 'android') {
      inpuElementRef.current.setNativeProps({
        style: {fontFamily: 'Roboto-Italic'},
      })
    }
  }, [])

  return <TextInput ref={inpuElementRef} {...props} />
}

export default Input
