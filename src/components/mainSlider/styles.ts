import styled from 'styled-components';

export const MainSliderConteinerStyle = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  padding: 1rem 0;
`;

export const MainSliderCardStyle = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-align: start;
`