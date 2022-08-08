import styled from 'styled-components';

export const GradContSt = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
`
export const ConteinerGrad = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
`
export const GradInputSt = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
  border-radius: 10px;
  margin: .5rem;
  padding: 1rem 0
`
export const GradViewSt = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem 0;
`
export const ViewSt = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.color};
  border-radius: 10px;
`



