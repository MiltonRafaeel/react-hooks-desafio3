import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    button: string;
}

export default function StartButton({ button } : Props) {

    return (
        <section className="custom-button">
            <Link to="/before">
                {button}
            </Link>
        </section>
    );
}