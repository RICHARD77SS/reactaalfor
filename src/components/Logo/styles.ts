import styled from 'styled-components';

export const LogoM = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoP = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  display: none;
  @media (max-width: 768px) {
    display: block;
  }

`;
