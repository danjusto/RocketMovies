import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;

    > input {
        width: 100%;
        height: 56px;
        padding: 19px 24px;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 0;
        outline: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
    }

`;