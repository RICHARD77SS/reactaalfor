import styled from 'styled-components';

export const FlexConteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.background};
`