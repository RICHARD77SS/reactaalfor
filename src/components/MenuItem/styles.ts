import styled from 'styled-components';

export const UlMenuItemStyle = styled.ul`
  width: 200px;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;
export const ListItemStyle = styled.li`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  list-style-type: none;
  margin: .4rem;
  .LinkRd{
    color: ${props => props.theme.colors.text};
  }
`