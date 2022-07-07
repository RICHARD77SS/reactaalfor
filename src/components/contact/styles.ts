import Styled from 'styled-components';

export const ContactConteinerStyle = Styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    a{
        color: ${props => props.theme.colors.text};
    }
    .icon1{
        position: absolute;
        transform: translatex(-120px)
    }
    .icon1:hover {
        position: absolute;
        transform: translatex(-122px)
    }
`
export const ListLinkSt = Styled.div`
    width: 70%;
    height: 400px;
    display: flex;
    padding: 2rem 0;
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid;
    border-color: ${props => props.theme.colors.secundary};

`