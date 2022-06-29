import styled from 'styled-components';

export const ProdutoSlideImgSt = styled.div`
  min-width: 249px;
  max-width: 249px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;

  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const PCardAjustFlexSt = styled.div`
  width: 249px;
  height: auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const PCardAjustTxtSt = styled.div`
  width: 249px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const ProdutoSlideImgConteinerSt = styled.div`
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  .imgc {
    width: 100%;
    height: 100%;
  }
`
export const MaisProdutosSlideSt = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    overflow-x: scroll;
    align-items: top;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.theme.colors.bordeer};
    scroll-snap-type: mandatory;
  `
export const CadProdutosSlideSt = styled.div`
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
