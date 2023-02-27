import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Container, Content, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Profile() {
    return (
        <Container>
            <div className="div-head">
                <TextButton to="/" title="Voltar" icon={FiArrowLeft} />
            </div>
            <Content>
                <Avatar>
                    <img src="http://github.com/rodrigorgtic.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="email" placeholder="E-mail" icon={FiMail} />
                <Input type="password" placeholder="Senha atual" icon={FiLock} />
                <Input type="password" placeholder="Nova senha" icon={FiLock} />
                <Button title="Salvar" />
            </Content>
        </Container>
    );
}