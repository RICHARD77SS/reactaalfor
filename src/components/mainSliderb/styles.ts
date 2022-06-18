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
  overflow: hidden;
  scroll-snap-type: mandatory;
  scroll-snap-align: start;
`
export const MainCardStyle = styled.div`
  min-width: 300px;
  height: 450px;
  margin: .5rem;
  border-radius: 20px;
  background: ${props => props.theme.colors.primary};
`
export const MainCardContentStyle = styled.div`

`
export const MainCardTitleStyle = styled.h1`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`