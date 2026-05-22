import FieldFindProfile from '../FieldFindProfile';
import FindButton from '../FindButton';
import Title from '../Title';
import './styles.css';

export default function CardProfile() {

    return (
        <main className="card-container">
            <section className="card-content ml31">
                <div className="custom-title-card-find-profile">
                    <Title title="Encontre um perfil Github" />
                </div>
                <div>
                    <FieldFindProfile />
                </div>
                <div>
                    <FindButton button="Encontrar" />
                </div>
            </section>
        </main>
    );
}