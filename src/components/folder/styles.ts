import styled from 'styled-components';

export const FolderStyle = styled.div`
    min-width: 250px;
    height: 300px;
    backdrop-filter: blur(18px) saturate(180%);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s;
`
export const FolderTextDiv = styled.div`
  width: 90%;
  height: auto;
  margin: .5rem auto;
`