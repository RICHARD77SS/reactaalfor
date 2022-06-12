import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 30px;
  height: 30px;
  font-size: 1rem;
  border-radius: 20px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`