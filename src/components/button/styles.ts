import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
};

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  border: ${props => props.border}; 
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin: 4px;
  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: #000;
}
`