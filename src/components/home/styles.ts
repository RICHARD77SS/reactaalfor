import Styled from 'styled-components';

export const HomeConteinerStyle = Styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 2rem 0;
    .linkRd {
        color: ${props => props.theme.colors.text};
    }
`
