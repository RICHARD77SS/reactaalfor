import styled from 'styled-components';

export const Inputs = styled.input`
  width: 250px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 2px solid;
  border-color: ${props => props.theme.colors.bordeer}
`;