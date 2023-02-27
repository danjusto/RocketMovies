import styled from 'styled-components';
import ClockImg from "../../assets/clock.png"
import StarF from "../../assets/StarFill.svg"
import StarE from "../../assets/StarEmpty.svg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header" 
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 40px 0 80px;
    }
`;

export const Content = styled.div`
    max-width: 1113px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        align-items: center;
        gap: 20px;

        h1 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
        }

        div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    > div:nth-child(4) {
        gap: 0px;
    }

    > p {
        margin-top: 40px;
        font-weight: 400;
        line-height: 21px;
        text-align: justify;
    }
`;

export const Created = styled.div`
    display: flex;
    gap: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin: 24px 0 40px;

    > div {
        display: flex;
        gap: 8px;
        align-items: center;

        img {
            height: 16px;
            width: 16px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.SEPARATOR};
        }
    }
`;

export const Clock = styled.div`
    height: 16px;
    width: 16px;
    background: url(${ClockImg}) center;
    background-size: contain;
`;

export const StarFill = styled.div`
    height: 20px;
    width: 20px;
    background: url(${StarF}) center;
    background-size: contain;
`;

export const StarEmpty = styled.div`
    height: 20px;
    width: 20px;
    background: url(${StarE}) center;
    background-size: contain;
`;