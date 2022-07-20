import Styled from 'styled-components';

export const ContatosSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ListSt = Styled.ul`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;
`
export const ContatoSt = Styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 0px #000 inset;
  margin: 5px;
`