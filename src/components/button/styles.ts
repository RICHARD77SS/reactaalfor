import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
  padding?: string;
  margin?: string;
};

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  border: ${props => props.border}; 
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  margin: ${props => props.margin};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${props => props.padding};

  &:hover {
    transition: ease-in-out all 0.2s;
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.text};
}
`