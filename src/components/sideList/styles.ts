import styled from 'styled-components';

export const SideListStyle = styled.ul`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-arrownd;
  .link {
    width: auto;
    padding: 5px 20px;
    color: ${props => props.theme.colors.text};
  }
  .link:hover {
    color: #000;
  }
  @media (max-width: 768px){
    margin-left: 55%;
  }
`;