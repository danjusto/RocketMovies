import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 
import { api } from "../../services/api";
import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function Create() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        if (!newTag) {
            return alert("Não é possível incluir um marcador vazio")
        }
        
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        if(!title) {
            return alert("Digite o título do filme.")
        }

        if(isNaN(rating) || (Number(rating) < 1 || Number(rating) > 5)) {
            return alert("O rating deve ser um valor entre 1 e 5.")
        }

        if(newTag) {
            return alert("Clique para adicionar o marcador ou deixe o campo vazio.");
        }
        
        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });

        alert("Avaliação de filme criada com sucesso!")
        navigate("/");
    }

    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <TextButton to="/" icon={FiArrowLeft} title="Voltar" />
                    <h1>Novo filme</h1>
                    <div>
                        <Input 
                            type="text" 
                            placeholder="Título" 
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            type="text" 
                            placeholder="Sua nota (de 0 a 5)" 
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <TextArea 
                        placeholder="Observações" 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>
                    <div className="tags">
                        {
                            tags.map((tag, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                        />
                            ))
                        }
                        <NoteItem 
                            isNew
                            value={newTag}
                            placeholder="Novo marcador" 
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                    </div>
                    <div>
                        <Button 
                            title="Salvar"
                            onClick={handleNewMovie}
                        />
                    </div>
                </Content>
            </main>
        </Container>
    );
}