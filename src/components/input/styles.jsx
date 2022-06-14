import styled from 'styled-components';

export const Inputs = styled.input`
  width: ${props => props.inputSize};
  height: 30px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 1px solid;
  border-color: ${props => props.theme.colors.bordeer}
`;