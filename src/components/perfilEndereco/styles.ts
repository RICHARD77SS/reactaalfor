import Styled from 'styled-components';

export const PublicInfoSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 5%;
  @media (max-width: 800px){
    flex-direction: column;

  }

`
export const ConteinerSt = Styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ButtonSt = Styled.div`
  width: 250px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`