import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${props => props.buttonSize};
  height: 30px;
  border-radius: ${props => props.buttonBorderRadius} ;
  background: ${props => props.buttonColor};
  color: ${props => props.theme.colors.text};
  margin: 4px;
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`