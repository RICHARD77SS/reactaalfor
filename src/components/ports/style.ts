import styled from 'styled-components';

export const PortsStyle = styled.div`
  width: 45%;
  height: auto;
  display: block;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 7rem;
  margin-top: 6rem;
  border-radius: 60% 60% 100% 100%;
  @media (max-width: 768px){
    width: 90%;
  }
`