import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  height: auto;
  padding: 1rem 0;
  border-top: 1px solid ${props => props.theme.colors.bordeer};
  background-color: ${props => props.theme.colors.background};
`;
export const FooterDivStyle = styled.footer`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem 8rem;
  background-color: ${props => props.theme.colors.background};
`;