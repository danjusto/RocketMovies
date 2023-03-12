import { useState } from "react";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/profile_icon.svg"
import { Container, Content, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: password
        }

        await updateProfile({ user, avatarFile })
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <div className="div-head">
                <TextButton to="/" title="Voltar" icon={FiArrowLeft} />
            </div>
            <Content>
                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                            id="avatar" 
                            type="file" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input 
                    type="text" 
                    placeholder="Nome" 
                    icon={FiUser} 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    icon={FiMail} 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Senha atual" 
                    icon={FiLock} 
                    onChange={e => setPassword(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Nova senha" 
                    icon={FiLock} 
                    onChange={e => setNewPassword(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate} />
            </Content>
        </Container>
    );
}