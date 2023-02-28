import { FiPlus } from "react-icons/fi";
import { Container, Content, ResumeSection, Button } from "./style";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars"

export function Home() {
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <div className="div-head">
                        <h1>Meus filmes</h1>
                        <Button to="/new">
                            <FiPlus/>
                            Adicionar filme
                        </Button>
                    </div>
                    <ResumeSection>
                        <div>
                            <h2>Interstellar</h2>
                            <Stars />
                        </div>
                        <p>
                            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O
                        </p>
                        <div className="tags">
                            <Tag title="Ficção Científica"/>
                            <Tag title="Drama"/>
                            <Tag title="Família"/>
                        </div>
                    </ResumeSection>
                    <ResumeSection>
                        <div>
                            <h2>Interstellar</h2>
                            <Stars />
                        </div>
                        <p>
                            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O
                        </p>
                        <div className="tags">
                            <Tag title="Ficção Científica"/>
                            <Tag title="Drama"/>
                            <Tag title="Família"/>
                        </div>
                    </ResumeSection>
                </Content>
            </main>
        </Container>
    );
}