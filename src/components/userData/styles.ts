import Styled from 'styled-components';

interface Props {
  height: string;
}



export const UserDataSt = Styled.div<Props>`
  width: 30px;
  height: ${Props => Props.height};
  display: flex;
  align-items: end;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  font-size: .8rem;
  `