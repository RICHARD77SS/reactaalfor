import styled from 'styled-components';

export const BollsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 100% 0% 100% 0% / 100% 0% 100% 0% ;
  background-color: ${props => props.theme.colors.secundary};
  box-shadow: 0px 0px 10px ${props => props.theme.colors.shadowSecundary};
`
export const Bolls2Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%  ;
  background-color: ${props => props.theme.colors.secundary};
`