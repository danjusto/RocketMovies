import styled from "styled-components";
import backgroundImg from "../../assets/bg.svg";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        margin: 40px 0;
        padding-left: 4px;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        margin-bottom: 8px;
    }

    > button {
        margin: 16px 0;
    }

    > a {
        margin-top: 26px;
        align-self: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;