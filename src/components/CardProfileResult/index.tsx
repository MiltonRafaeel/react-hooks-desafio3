import './styles.css';

export default function CardProfileResult() {

    return (
        <main className="card-result-container">
            <section className="card-result-content">
                <div className="custom-card-find-profile-result">
                    imagem
                </div>
                <div className="card--wthite">
                    <div className="custom-color-font">
                        <p>Informações</p>
                    </div>
                    <form action="">
                        <div>
                            <input type="text" placeholder="Perfil:" />
                        </div>

                        <div>
                            <input type="text" placeholder="Seguidores:" />
                        </div>

                        <div>
                            <input type="text" placeholder="Localidade:" />
                        </div>

                        <div>
                            <input type="text" placeholder="Nome:" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}