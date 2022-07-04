import styled from 'styled-components';

export const ProdutoSlideImgbSt = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 190px;
  display: block;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  .img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 564){
    height: 200px;
  }
`
export const ProdutosSt = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    border-color: ${props => props.theme.colors.bordeer};
    scroll-snap-type: mandatory;
  `
export const ProdutoCardSt = styled.div`
  width: 190px;
  height: 300px;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  @media (max-width: 1024px) {
    width: 180px;
  }
  @media (max-width: 768px) {
  width: 190px;
  }
`