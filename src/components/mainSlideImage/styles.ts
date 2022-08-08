import styled from 'styled-components';

export const MainSlideImageStyle = styled.div`
  width: 1000px;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: contain;
  background-image: url("https://img.freepik.com/free-vector/speed-lights-background-video-conference_23-2148613908.jpg?w=826");
  background-repeat: no-repeat;
 
`;
export const Div = styled.div`
  width: fit-content;
  height: fit-content;
  z-index: 99;
  background: #fff;
  margin: 1rem;
`
export const ConteinerImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`