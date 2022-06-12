import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${props => props.buttonSize};
  height: 30px;
  border-radius: 20px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  margin: 4px;
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`