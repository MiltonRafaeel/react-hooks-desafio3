import CardProfile from "../../components/CardProfile";
import Header from "../../components/Header";
import CardProfileResult from "../../components/CardProfileResult";
import Title from "../../components/Title";
import { useState } from "react";
import { findByUser } from "../../services/user";

export default function Before() {

    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<any>(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!username.trim()) return;

        setError('');
        setUserData(null);

        findByUser(username)
            .then(resp => setUserData(resp.data))
            .catch(error => {
                if (error.response?.status === 404) {
                    setError('Usuário não encontrado');
                } else {
                    setError('Erro ao buscar usuário');
                }
            });
    };

    return (
        <div>

            <Header />
            <CardProfile
                username={username}
                onUsernameChange={setUsername}
                onSearch={handleSearch}
            />
            {error &&
                <div className="error-container">
                    <Title title={error} />
                </div>
            }
            {userData && (
                <CardProfileResult
                    avatar={userData.avatar_url}
                    profileUrl={userData.html_url}
                    followers={userData.followers}
                    location={userData.location}
                    name={userData.name}
                />
            )}
        </div>
    );
}