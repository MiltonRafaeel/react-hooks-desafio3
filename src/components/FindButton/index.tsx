import './styles.css';

type Props = {
    button: string;
}

export default function FindButton({ button } : Props) {

    return (
        <section className="custom-button find-button">
            <button type="submit">
                {button}
            </button>
        </section>
    );
}