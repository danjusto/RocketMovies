import { Container, Profile } from "./style";
import { Input } from "../Input";

export function Header() {
    return (
        <Container>
            <h1>
                RocketMovies
            </h1>
            <Input type="text" placeholder="Pesquisar pelo título" />
            <Profile>
                <div>
                    <strong>Rodrigo Gonçalves</strong>
                    <button>sair</button>
                </div>
                <img src="http://github.com/rodrigorgtic.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    );
}