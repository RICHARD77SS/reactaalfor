import Styled from 'styled-components';

interface Props {
  height: string;
}
export const PerfilSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .label {
    font-size: .8rem;
  }
  @media(max-width: 640px) {
    .label {
      font-size: .6rem;
    }
  }
`
export const PerfilInfoSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  @media(max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const PerfilSidebarSt = Styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`
export const OptionsdSt = Styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`
export const OptionSt = Styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid pink;
`

export const OptionsSt = Styled.ul`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

`
export const UserStatisticSt = Styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: start;
  justify-content: center;
`
export const UgraphSt = Styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  border-bottom: 1px solid black;
  `
export const UserDataSt = Styled.div<Props>`
  width: 30px;
  height: ${Props => Props.height};
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  `
export const UgraphNumSt = Styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-around;
`
export const VerticalDataSt = Styled.div`
  width: 3px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: #000;
  align-items: start;
  justify-content: space-between;
  `
export const PerfilContenSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid red;
`
export const UserHistory = Styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
`
export const PublicInfoSt = Styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  
`
export const PublicSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
 align-items: start;
  justify-content: center;
  padding: 5%;
`
export const ButtonSt = Styled.div`
  width: 250px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`
export const BolonSt = Styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: center;
  background: #000;
  border-radius: 50%;
`
export const Bolon3St = Styled.div`
  width: 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
