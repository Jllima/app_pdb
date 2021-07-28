import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react'
import {TextInput, TextInputProps} from 'react-native'
import {TextAreaEl} from './styles'
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
      multiline={true}
      numberOfLines={5}
      placeholderTextColor="grey"
      isValid={isValid}
      {...props}
    />
  )
}

export default forwardRef(TextAreaInput)
