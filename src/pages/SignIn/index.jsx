import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth"; 
import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    icon={FiMail} 
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    type="password"    
                    placeholder="Senha" 
                    icon={FiLock} 
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn}/>
                <TextButton to="/register" title="Criar conta" />
            </Form>
            <Background/>
        </Container>
    );
}