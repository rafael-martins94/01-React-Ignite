import '../styles/repositories.scss';

import { RepositoryItem } from './RepositoryItem';

const repository = {
    name : "Rafael",
    description: "Martins   ",
    link: "https://app.memrise.com/home/"
}

export function RepositoryLista() {
    return (
        <section className="respository-list">
            <h1> Lista de Repositório</h1>
            <ul>
                <RepositoryItem repository = {repository} />
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
            </ul>
        </section>
    )
}