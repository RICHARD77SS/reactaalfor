import styled from 'styled-components';

export const DivCenterStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  @media (max-width: 1024px) {
    .label {
      display: none;
    }
  }
`