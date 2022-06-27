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
export const ProdutoContentSt = styled.div`
  width: 100%;
  height: auto;
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
  width: 100%;
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
  height: 562px;
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
export const ProdutoInfosSt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: top;
  justify-content: flex-start;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const ProdutoDescSt = styled.div`
  width: 25%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const LojaInfoSt = styled.div`
  width: 25%;
  height: 40%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const PerguntasSt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const PerguntasRespostasSt = styled.div`
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
export const AvaliacoesSt = styled.div`
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
export const AvaliacaoUsersInfoSt = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const UserSt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.bordeer};
`
export const AvaliacaoUserSt = styled.div`
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
