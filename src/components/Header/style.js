import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 123px;
    gap: 64px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.SEPARATOR};

    > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > div {
        display: flex;
        min-width: 125px;
        flex-direction: column;
        align-items: flex-end;

        strong {
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
        }

        button {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            border: none;
            background: transparent;
        }
    }
`;

export const Avatar = styled(Link)`
    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.SEPARATOR};
    }
`