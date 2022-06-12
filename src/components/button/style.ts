import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`