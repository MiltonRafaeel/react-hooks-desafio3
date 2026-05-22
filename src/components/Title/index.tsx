import './styles.css';

type Props = {
    title: string;
}

export default function Title({ title } : Props) {

    return (
        <h1 className="custom-title">{title}</h1>
    );
}