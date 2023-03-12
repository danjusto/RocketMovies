import { Container, StarFill, StarEmpty } from "./style";

export function Stars({rating}) {
    if (String(rating) === '1') {
        return (
            <Container>
                <StarFill />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />                        
                <StarEmpty />
            </Container>
        );
    } else if (String(rating) === '2') {
        return (
            <Container>
                <StarFill />
                <StarFill />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
            </Container>
        );
    } else if (String(rating) === '3') {
        return (
            <Container>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarEmpty />
                <StarEmpty />
            </Container>
        );
    } else if (String(rating) === '4') {
        return (
            <Container>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarEmpty />
            </Container>
        );
    } else if (String(rating) === '5') {
        return (
            <Container>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
            </Container>
        );
    }  else {
        return(
            <Container>
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
                <StarEmpty />
            </Container>
        )
    }
}