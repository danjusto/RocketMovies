import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    grid-template-rows: 144px auto;
    grid-template-areas:
    "header"
    "content";

    > .div-head {
        grid-area: header;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        height: 144px;
        display: flex;
        align-items: center;
        padding: 20px 0 0 144px;
    }
`;

export const Content = styled.form`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -85px auto;
    width: 340px;

    > div {
        margin-bottom: 8px;
    }

    > div:nth-child(2) {
        margin-top: 64px;
    }

    > div:nth-child(3) {
        margin-bottom: 24px;
    }

    > button {
        margin-top: 16px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;

export const Avatar = styled.div`
    position: relative;

    > img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        
        input {
            display: none;
        }
    
        svg {
            width: 18px;
            height: 18px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }
    }

`;