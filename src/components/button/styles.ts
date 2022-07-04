import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  size?: string;
  border?: string;
};

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${props => props.size};
  height: 30px;
  border-radius: ${props => props.border};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin: 4px;
  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: #000;
}
`