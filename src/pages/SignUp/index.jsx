import { FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi";
import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="email" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Senha" icon={FiLock}/>
                <Button title="Cadastrar" />
                <TextButton to="/" icon={FiArrowLeft} title="Voltar para o login" />
            </Form>
            <Background/>
        </Container>
    );
}