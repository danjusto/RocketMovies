import styled from "styled-components";
import StarF from "../../assets/StarFill.svg"
import StarE from "../../assets/StarEmpty.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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