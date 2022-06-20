import styled from 'styled-components';

export const FooterListStyle = styled.ul`
  width: fit-content;
  height: auto;
  display: grid;
  margin: 1rem auto;
    .link {
    width: 100%;
    padding: 5px 26px;
    color: ${props => props.theme.colors.text};
  }
  .link:hover {
    color: #000;
  }
`