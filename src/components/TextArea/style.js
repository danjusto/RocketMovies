import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 19px 24px;
    border: 0;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;