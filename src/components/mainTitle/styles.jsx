import styled from 'styled-components';

export const TitleStyle = styled.h2`
  font-size: ${props => props.fontSize};
  color: ${props => props.color || props.theme.colors.text};
  font-weight: ${props => props.fontWeight || '700'}; 
  margin: .5rem 0;
`