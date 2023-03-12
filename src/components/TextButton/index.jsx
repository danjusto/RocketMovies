import { Container } from "./style";

export function TextButton({ title, icon: Icon, ...rest }) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}