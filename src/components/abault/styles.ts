import Styled from 'styled-components';

export const AbContSt = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 1rem 0;
`
export const AbInfoSt = Styled.div`
    display: flex;
    width: auto;
    height: auto;
    @media (max-width: 1024px) {
        flex-direction: column;
        width: fit-content;
    }
`
export const AbDescSt = Styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
    text-align: center;
`