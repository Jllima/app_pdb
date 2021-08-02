import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react'
import {TextInput, TextInputProps} from 'react-native'
import {TextAreaEl} from './styles'
import Colors from '@pdb/presentation/styles/colors'
export interface TextAreaHandles extends TextInput {
  requiredField: () => void
  notRequiredField: () => void
}

const TextAreaInput: React.ForwardRefRenderFunction<
  TextAreaHandles,
  TextInputProps
> = (props: TextInputProps, ref) => {
  const [isValid, setIsValid] = useState(true)
  const requiredField = useCallback(() => {
    setIsValid(false)
  }, [])
  const notRequiredField = useCallback(() => {
    setIsValid(true)
  }, [])

  useImperativeHandle(ref, (): any => {
    return {
      requiredField,
      notRequiredField,
    }
  })

  return (
    <TextAreaEl
      ref={ref}
      placeholderTextColor={Colors.darkGrey}
      isValid={isValid}
      numberOfLines={5}
      multiline={true}
      {...props}
    />
  )
}

export default forwardRef(TextAreaInput)
