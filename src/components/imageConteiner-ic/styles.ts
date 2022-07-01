import styled from 'styled-components';

interface Props {
  height: string;
  width: string;
}

export const IcSt = styled.div<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-size: contain;
  background-repeat: no-repeat;
`