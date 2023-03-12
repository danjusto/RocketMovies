import styled from "styled-components";

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
    width: 1113px;
    margin: 0 auto;

    > div {
        display: flex;
        align-items: center;
        gap: 40px;
        margin: 40px 0;
        
        button:nth-child(1){
            width: 50%;
            margin: 0 auto;
        }
    }

    h2 {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin: 40px 0 24px;
    }

    > .tags {
        width: 100%;
        min-height: 88px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 10px;
        gap: 24px;
        margin: 0;
    }
`;