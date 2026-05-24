import './styles.css';

type Props = {
    avatar: string;
    profileUrl: string;
    followers: number;
    location: string;
    name: string;
}

export default function CardProfileResult({ avatar, profileUrl, followers, location, name } : Props) {

    return (
        <main className="card-result-container">
            <section className="card-result-content">
                <div className="custom-card-find-profile-img-result">
                    <img src={avatar} alt="" />
                </div>
                <div className="card--wthite">
                    <div className="custom-color-font">
                        Informações
                    </div>
                        <div className="border-result-profile">
                            <p>Perfil: <a href={profileUrl} target="_blank">{profileUrl}</a></p>
                        </div>

                        <div className="border-result-profile">
                            <p>Seguidores: <span>{followers}</span></p>
                        </div>

                        <div className="border-result-profile">
                            <p>Localidade: <span>{location}</span></p>
                        </div>

                        <div className="border-result-profile">
                            <p>Nome: <span>{name}</span></p>
                        </div>
                </div>
            </section>
        </main>
    );
}