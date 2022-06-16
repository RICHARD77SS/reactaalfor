import styled from 'styled-components';

export const LabelStyle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`