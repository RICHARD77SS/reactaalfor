import styled from 'styled-components';

export const NavListStyle = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px){
    display: none;
  }
  .link {
    width: fit-content;
    height: 34px;
    padding: .5rem 1rem;
    font-size: .9rem;
    font-weight: 700;
    border-radius: 10px;
    color: ${props => props.theme.colors.text};

  }
  .link:hover {
    transition: 1s;
    box-shadow: inset 0 0 10px ${props => props.theme.colors.text};
  }
`