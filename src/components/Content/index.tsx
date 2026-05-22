import './styles.css';

type Props = {
    content: string;
}

export default function Content({ content }: Props) {

    return (
        <p className="custom-content">{content}</p>
    );
}