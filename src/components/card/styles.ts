import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 250px;
  border-radius: 10px;
  background: ${props => props.theme.colors.secundary};
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  padding: 0 30px;
`;
