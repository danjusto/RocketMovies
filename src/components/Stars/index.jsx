import { Container, StarFill, StarEmpty } from "./style";

export function Stars() {
    return (
        <Container>
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarEmpty />
        </Container>
    );
}