import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10%;
`;
