import Styled from 'styled-components';

export const PlansSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 
`
export const PlanSt = Styled.div`
  width: 300px;
  height: 500px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.secundary};
  box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.22) inset;
  -webkit-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.22) inset;
  -moz-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.22) inset;
  
  :hover{

  }
`
