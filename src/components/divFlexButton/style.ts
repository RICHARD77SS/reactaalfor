import styled from 'styled-components';

export const DivFlexStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding:0 0 1rem 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`