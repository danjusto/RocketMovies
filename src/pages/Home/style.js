import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
    }
`;

export const Content = styled.div`
    width: 1137px;
    margin: 0 auto;

    > .div-head {
        margin: 50px 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-weight: 400;
            font-size: 32px;
            line-height: 42px;
        }

        a {
            width: 207px;
            height: 48px;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            svg {
                height: 20px;
                width: 20px;
            }
        }
    }
`;

export const ResumeSection = styled.div`
    width: 1137px;
    height: 223px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    padding: 32px;
    margin-bottom: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
        }

        div {
            gap: 6px;
        }

        div > div {
            height: 12px;
            width: 12px;

        }

    }

    > p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        max-height: 53px;
        overflow: hidden;
    }

    > .tags {

        span {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            padding: 5px 16px;
        }
    }
`;