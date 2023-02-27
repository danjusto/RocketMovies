import { Container } from "./style";

export function TextButton({ title, isActive = false, icon: Icon, ...rest }) {
    return (
        <Container
            type="button"
            isActive={isActive}
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}