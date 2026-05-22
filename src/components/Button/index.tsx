import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    button: string;
}

export default function Button({ button } : Props) {

    return (
        <section className="custom-button">
            <Link to="/">
                {button}
            </Link>
        </section>
    );
}