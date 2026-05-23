import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <header className="header-container">
            <Link to="/">
                <h1 className="content-header">Github API</h1>
            </Link>
        </header>
    );
}