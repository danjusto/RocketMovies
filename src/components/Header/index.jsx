import { useEffect, useState} from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/profile_icon.svg";
import { Container, Profile, Avatar } from "./style";
import { Input } from "../Input";


export function Header({func}) {

    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container>
            <h1>
                RocketMovies
            </h1>
            <Input 
                type="text" 
                placeholder="Pesquisar pelo título" 
                onChange={(e) => func(e.target.value)}
            />
            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Avatar to="/profile" >
                    <img src={avatarUrl} alt={user.name} />
                </Avatar>
            </Profile>
        </Container>
    );
}