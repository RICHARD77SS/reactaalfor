import styled from 'styled-components';

export const MainConteinerStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 0 ;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const MainTextConteinerStyle = styled.div`
  width: 40%;
  height: auto;
`
export const MainIconsConteinerStyle = styled.div`
  width: auto;
  height: auto;
`
export const MainVIconsConteinerStyle = styled.div`
  width: auto;
  height: auto;
`
export const MainHIconsConteinerStyle = styled.div`
  width: auto;
  height: auto;
  display: flex;
`
export const MainIconsStyle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  border: 4px solid ${props => props.theme.colors.bordeer};
`