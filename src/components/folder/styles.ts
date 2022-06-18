import styled from 'styled-components';

export const FolderStyle = styled.div`
    width: 250px;
    height: 300px;
    background: ${props => props.theme.colors.background};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const FolderTextDiv = styled.div`
  width: 90%;
  height: auto;
  margin: .5rem auto;
`