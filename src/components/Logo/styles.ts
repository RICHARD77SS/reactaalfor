import styled from 'styled-components';

export const LogoM = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;
