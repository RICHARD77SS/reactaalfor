import styled from 'styled-components';

export const LoginContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 300px;
  
`

export const DivFlexStyles = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding:0 0 1rem 0;
  margin: 0 auto;
  .link {
    width: 100%;
    padding: 5px 26px;
    color: ${props => props.theme.colors.text};
  }
  .link:hover {
    color: #000;
  }
`