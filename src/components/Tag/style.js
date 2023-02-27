import styled from "styled-components";

export const Container = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
`;