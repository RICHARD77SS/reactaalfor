import Styled from 'styled-components';

export const HomeConteinerStyle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 2rem 0;
    .linkRd {
        color: ${props => props.theme.colors.text};
    }
    .loginButton {
        display: flex;
    }
`
export const LoginButton = Styled.div`
    width: fit-content;
    display: flex;
`