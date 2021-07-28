import styled, {css} from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

type TextInputProps = {
  isValid?: boolean
}

const TextAreaEl = styled.TextInput<TextInputProps>`
  padding: 13px;
  padding-horizontal: 20px;
  padding-vertical: 19px;
  border-radius: 10px;
  align-self: stretch;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-horizontal: 23px;
  font-size: 16px;
  font-weight: 600;
  height: 130px;
  border: 1px;
  background-color: ${Colors.ligthGrey};
  border-color: ${Colors.red};
  ${props =>
    props.isValid
      ? css`
          border-color: ${Colors.ligthGrey};
        `
      : css`
          border-color: ${Colors.red};
        `}
`

export {TextAreaEl}
