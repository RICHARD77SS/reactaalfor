import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 1rem 0;
  border-top: 1px solid ${props => props.theme.colors.bordeer};
  background-color: ${props => props.theme.colors.background};
`;
export const FooterDivStyle = styled.footer`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: ${props => props.theme.colors.background};
`;