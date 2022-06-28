import styled from 'styled-components';

export const ProdutoPageContainerSt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  summary{
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
  }
  .img2{
    width: 100%;
    height: 65%;
  }
  .img{
    width: 100%;
    height: 100%
  }
`


  export const MaisProdutosSt = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.theme.colors.bordeer};
  `
  export const MaisProdutosSlideSt = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.theme.colors.bordeer};
    scroll-snap-type: mandatory;
  `
