import styled from 'styled-components';

export const DivFlexStyle = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1024px){
    .label {
      transform: translateX(-35px);
    }
  }
`