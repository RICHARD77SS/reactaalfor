import styled from 'styled-components';

export const FooterListStyle = styled.ul`
  width: fit-content;
  height: auto;
  display: grid;
  margin: 1rem auto;
  .link {
    color: ${props => props.theme.colors.text};
  }
`