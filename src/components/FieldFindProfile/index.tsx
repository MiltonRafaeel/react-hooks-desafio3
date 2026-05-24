import './styles.css';

type Props = {
    username: string;
    onChange: (value: string) => void;
}

export default function FieldFindProfile({ username, onChange }: Props) {

    return (
        <div className="custom-field-find-profile">
            <input className="custom-input-field-profile"
                type="text"
                placeholder="Usuário Github"
                value={username}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}