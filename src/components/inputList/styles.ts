import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 55px;
  height: 30px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border-color: ${props => props.theme.colors.bordeer}
`