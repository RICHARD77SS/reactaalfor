import styled from 'styled-components';

export const ProdutoSlideImgSt = styled.div`
  min-width: 249px;
  max-width: 249px;
  height: 250px;
  display: block;
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
