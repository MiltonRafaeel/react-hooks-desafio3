import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    button: string;
}

export default function FindButton({ button } : Props) {

    return (
        <section className="custom-button find-button">
            <Link to="/after">
                {button}
            </Link>
        </section>
    );
}