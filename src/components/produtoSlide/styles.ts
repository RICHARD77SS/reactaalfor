import styled from 'styled-components';

export const ProdutoSlideImgSt = styled.div`
  min-width: 18%;
  max-width: 18%;
  height: 18%;
  display: block;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const ProdutoSlideImgbSt = styled.div`
  min-width: 95%;
  max-width: 95%;
  height: 240px;
  display: block;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const MaisProdutosSlideSt = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.theme.colors.bordeer};
    scroll-snap-type: mandatory;
  `
export const MaisProdutosSlidehSt = styled.div`
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
