import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border-color: ${props => props.theme.colors.bordeer}
`;