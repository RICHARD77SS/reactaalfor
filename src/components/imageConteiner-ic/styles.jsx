import styled from 'styled-components';

export const IcSt = styled.div`
  width: ${props => props.icWidth};
  height: ${props => props.icHeight};
  border-radius: ${props => props.icBorderRad};
  background-image: url(${props => props.icImage});
  background-size: contain;
  background-repeat: no-repeat;
`