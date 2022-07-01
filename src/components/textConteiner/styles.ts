import styled from 'styled-components';

interface Props {
  height: string;
  width: string;
}

export const TxtSt = styled.div<Props>`
  width:  ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`