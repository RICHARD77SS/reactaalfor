import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 250px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: block;
  margin: 1rem auto;
  padding: 0 30px;
`;
