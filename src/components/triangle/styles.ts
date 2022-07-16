import Styled from 'styled-components';
interface Props {
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  color?: string;
  width?: string; 
}
export const TriangleSt = Styled.div<Props>`
  width: ${Props => Props.width};
  border-left: ${Props => Props.left} solid transparent;
  border-right: ${Props => Props.right} solid transparent;
  border-bottom: ${Props => Props.bottom} solid ${Props => Props.color};
  border-top: ${Props => Props.left} solid transparent;
  display: inline-block;
  
`