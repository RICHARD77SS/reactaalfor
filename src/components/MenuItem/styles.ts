import styled from 'styled-components';

export const UlMenuItemStyle = styled.ul`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 2rem;
  text-align: center;
`;
export const ListItemStyle = styled.li`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  list-style-type: none;
  margin: 1rem 2rem;
  .LinkRd{
    color: ${props => props.theme.colors.text};
  }
  
`