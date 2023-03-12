import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { FiPlus } from "react-icons/fi";
import { Container, Content, ResumeSection, Button } from "./style";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars"

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    function handlePreview(id) {
        navigate(`/preview/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        };
        fetchNotes();
    }, [search]);

    return (
        <Container>
            <Header func={setSearch} />
            <main>
                <Content>
                    <div className="div-head">
                        <h1>Meus filmes</h1>
                        <Button to="/new">
                            <FiPlus/>
                            Adicionar filme
                        </Button>
                    </div>
                    {
                        notes.map(note => (
                            <ResumeSection 
                                key={String(note.id)}
                                onClick={() => handlePreview(note.id)}
                            >
                                <div>
                                    {
                                        <h2>{note.title}</h2>
                                    }
                                    <Stars rating={note.rating} />
                                </div>
                                {
                                    note.description &&
                                    <p>{note.description}</p>
                                }
                                {
                                    note.tags &&
                                    <div className="tags">
                                        {
                                            note.tags.map(tag => (
                                                <Tag 
                                                    key={String(tag.id)} 
                                                    title={tag.name}
                                                />)
                                            )
                                        }
                                    </div>
                                }
                            </ResumeSection>)
                        )
                    }
                </Content>
            </main>
        </Container>
    );
}