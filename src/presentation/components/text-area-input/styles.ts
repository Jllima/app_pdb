import styled, {css} from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

type TextInputProps = {
  isValid?: boolean
}

const TextAreaEl = styled.TextInput<TextInputProps>`
  text-align-vertical: top;
  padding: 13px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-horizontal: 23px;
  font-size: 16px;
  font-weight: 700;
  height: 130px;
  border: 1px;
  background-color: ${Colors.ligthGrey};
  color: ${Colors.darkGrey};
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
