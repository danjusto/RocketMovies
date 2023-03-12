import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import {FiArrowLeft } from "react-icons/fi";
import avatarPlaceholder from "../../assets/profile_icon.svg";
import { Container, Content, Created, Clock } from "./style";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";

export function Preview() {
    const [note, setNote] = useState({});
    const navigate = useNavigate();
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const path = window.location.pathname.split('/', 3)
    const id = path[2]

    async function handleRemoveMovie() {
        const confirm = window.confirm("Deseja remover o filme?");

        if(confirm) {
            await api.delete(`/notes/${id}`);
            navigate(-1);
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${id}`);
            setNote(response.data);
        };
        fetchNote();
    }, [id]);

    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <TextButton to="/" icon={FiArrowLeft} title="Voltar"/>
                    <div>
                        <h1>{note.title}</h1>
                        <Stars rating={note.rating}/>
                    </div>
                    <Created>
                        <div>
                            <img src={avatarUrl} alt={user.name} />
                            <p>por {user.name}</p>
                        </div>
                        <div>
                            <Clock/>
                            <p>{note.created_at}</p>
                        </div>
                    </Created>
                    {
                        note.tags &&
                            <div>
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
                    <p>{note.description}</p>
                    <div>
                        <Button 
                            title="Excluir filme"
                            onClick={handleRemoveMovie}
                        />
                    </div>
                </Content>
            </main>
        </Container>
    );
}
