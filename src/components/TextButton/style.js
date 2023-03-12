import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    width: fit-content;
`;