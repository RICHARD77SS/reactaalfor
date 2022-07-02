import styled from 'styled-components';

export const NavListStyle = styled.ul`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-arrownd;
  @media (max-width: 768px){
    display: none;
  }
  .link {
    width: 100%;
    padding: 5px 26px;
    color: ${props => props.theme.colors.text};
  }
  .link:hover {
    color: #000;
  }
`