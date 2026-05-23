import './styles.css';

export default function CardProfileResult() {

    return (
        <main className="card-result-container">
            <section className="card-result-content">
                <div className="custom-title-card-find-profile-result">
                    img
                </div>
                <div>
                    <div>
                        informacoes
                    </div>
                    <form action="">
                        <input type="text" placeholder="Perfil:" />
                        <input type="text" placeholder="Seguidores:" />
                        <input type="text" placeholder="Localidade:" />
                        <input type="text" placeholder="Nome:" />
                    </form>
                </div>
            </section>
        </main>
    );
}