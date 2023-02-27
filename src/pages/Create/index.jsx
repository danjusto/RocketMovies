import { FiArrowLeft } from "react-icons/fi";
import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function Create() {
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <TextButton to="/" icon={FiArrowLeft} title="Voltar" />
                    <h1>Novo filme</h1>
                    <div>
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <TextArea placeholder="Observações" />
                    <h2>Marcadores</h2>
                    <div className="tags">
                        <NoteItem value="React" />
                        <NoteItem placeholder="Novo marcador" isNew />
                    </div>
                    <div>
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </Content>
            </main>
        </Container>
    );
}