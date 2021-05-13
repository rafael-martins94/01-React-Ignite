export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "padrão"}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.link}>
                Acessar Repositório
            </a>
        </li>
    )
}