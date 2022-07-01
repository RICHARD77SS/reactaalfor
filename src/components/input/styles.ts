import styled from 'styled-components';

interface Props {
  inputSize: string;
}

export const Inputs = styled.input<Props>`
  width: ${props => props.inputSize};
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 1px solid;
  border-color: ${props => props.theme.colors.bordeer}
`;