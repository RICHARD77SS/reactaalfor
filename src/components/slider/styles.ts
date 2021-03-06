import styled from 'styled-components';

export const SliderConteinerStyle = styled.div`
  width: 90%;
  height: 480px;
  border-radius: 15px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  padding: .5rem 0;
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