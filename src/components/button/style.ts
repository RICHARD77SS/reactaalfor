import styled from 'styled-components';

interface Props {
  buttonSize: string;
  buttonBorderRadius: string;
}

export const ButtonStyle = styled.button<Props>`
  width: ${props => props.buttonSize};
  height: 30px;
  border-radius: ${props => props.buttonBorderRadius} ;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin: 4px;
  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: #000;
}
`