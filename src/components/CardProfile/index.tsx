import FieldFindProfile from '../FieldFindProfile';
import FindButton from '../FindButton';
import Title from '../Title';
import './styles.css';

type Props = {
    username: string;
    onUsernameChange: (value: string) => void;
    onSearch: () => void; // ainda passa do Before
}

export default function CardProfile({ username, onUsernameChange, onSearch }: Props) {

    return (
        <main className="card-container">
            <section className="card-content ml31">
                <div className="custom-title-card-find-profile">
                    <Title title="Encontre um perfil Github" />
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSearch();
                }}>
                    <FieldFindProfile username={username} onChange={onUsernameChange} />
                    <FindButton button="Encontrar" />
                </form>
            </section>
        </main>
    );
}