import styled from 'styled-components';

export const DivFlexStyle = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1024px){
    width: 35%;
    .label {
      transform: translateX(-35px);
    }

  }
  @media (max-width: 768px) {
    width: 25%;
    .label {
      display: none;
    }
  }
`