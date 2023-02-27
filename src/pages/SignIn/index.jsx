import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input type="email" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title="Entrar" />
                <TextButton to="/register" title="Criar conta" />
            </Form>
            <Background/>
        </Container>
    );
}