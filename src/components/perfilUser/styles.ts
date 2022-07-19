import Styled from 'styled-components';

export const UserInfoSt = Styled.ul`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  @media (max-width: 1024px) {
    width: 600px;
    height: 152px;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (max-width: 820px) {
    width: 200px;
    height: 452px;
    flex-direction: column;
    justify-content: space-around;
  }
  @media (max-width: 702px) {
    width: 301.5px;
    height: 280px;

  }
`
export const ListSt = Styled.li`
  width: fit-content;
  height: auto;
  display: flex;
  padding: .4rem;
`
export const UserSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;

`