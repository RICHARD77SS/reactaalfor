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
  .img {
    width: 100%;
    height: 100%;
  }
  .divi {
    width: fit-content;
    height: fit-content;
    z-index: 99;
    color: #fff;
  }
  .contimg {
    width: 200px;
    height: 150px;
  }
`;