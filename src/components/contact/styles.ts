import Styled from 'styled-components';


export const ContactConteinerStyle = Styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 2rem 0;
    align-items: center;
    justify-content: center;
    a{
        color: ${props => props.theme.colors.text};
    };
    .icon1{
        position: absolute;
        transform: translatex(-120px);
    };
    .icon1:hover {
        position: absolute;
        transform: translatex(-122px);
    };
    .icon svg {
        color: ${props => props.theme.colors.text};
    }
`
export const ListLinkSt = Styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    padding: 2rem 0;
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(16px) saturate(200%);
    -webkit-backdrop-filter: blur(16px) saturate(200%);
    background-color: rgba(12, 0, 255, 0.36);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0px 5px 10px 5px rgba(255, 255, 255, 0.125), 0px 5px 10px 5px rgba(0, 0, 0, 0.325);

`