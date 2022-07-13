import styled from 'styled-components';

export const SideListStyle = styled.ul`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: space-around;
  .link {
    width: auto;
    padding: 5px 20px;
    color: ${props => props.theme.colors.text};
  }
  .link:hover {
    color: #000;
  }
`;