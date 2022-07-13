import styled from 'styled-components';

export const GradContSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 4rem 0;
  flex-direction: column;
  align-items: center;
`
export const GradColorSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GradInputSt = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`
export const GradInputLabelSt = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const GradViewSt = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`
export const ViewSt = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.color};
`



