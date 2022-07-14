import Styled from 'styled-components';

interface Props {
  height: string;
}
export const PerfilSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 5%;
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
  align-items: start;
  justify-content: center;
  border: 1px solid red;
`
export const OptionsdSt = Styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid red;
`
export const OptionSt = Styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`
export const UserInfoSt = Styled.ul`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 2rem;
`
export const OptionsSt = Styled.ul`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 2rem;
`
export const UserSt = Styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;

`
export const ListSt = Styled.li`
  width: fit-content;
  height: auto;
  display: flex;
  padding: .5rem;
  `

export const UserStatisticSt = Styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`
export const UgraphSt = Styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  border-bottom: 1px solid green;
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
  height: 220px;
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