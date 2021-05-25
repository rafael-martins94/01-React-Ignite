
type RepositoryItemProps = {
    repository : {
        name: string,
        description : string,
        html_url: string,
    }
}

//usa o ? depois do nome da propriedade para indicar se é obrigatória

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name }</strong>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url}>
                Acessar Repositório
            </a>
        </li>
    )
}