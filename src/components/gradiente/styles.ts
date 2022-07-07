import styled from 'styled-components';

export const GradContSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GradColorSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const GradInputSt = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color};
`


