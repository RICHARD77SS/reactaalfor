import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  height: 250px;
  background: ${props => props.theme.colors.secundary};
  color: #FFF;
  display: block;
  margin: 1rem auto;
  padding: 0 30px;
`;
