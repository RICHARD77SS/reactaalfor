import styled from 'styled-components';

export const ProdutoContentSt = styled.div`
  width: 100%;
  height: 562px;
  display: flex;
  justify-content: flex-start;
`
export const ProdutoRollImgSt = styled.div`
  width: 100%;
  height: 112px;
  display: block;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const ProdutoSlideImgSt = styled.div`
  min-width: 249px;
  max-width: 249px;
  height: 250px;
  display: block;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const RollImagesSt = styled.div`
  width: 10%;
  height: auto;
  display: flex;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  flex-direction: column;
`
export const ProdutoSideSliderSt = styled.div`
  width: 20%;
  height: 837px;
  display: flex;
  overflow-y: scroll;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  flex-direction: column;
`
export const ProdutoConteinerImageSt = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  flex-direction: column;
`
export const ProdutoAddFavSt = styled.div`
  width: 100px;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const ProdutoBuySt = styled.div`
  width: 30%;
  padding: 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`