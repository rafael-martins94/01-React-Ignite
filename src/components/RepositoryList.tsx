import '../styles/repositories.scss';

import { useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

//https://api.github.com/orgs/rocketseat/repos

type Repository = {
    name: string,
    description: string,
    html_url: string,

}


export function RepositoryLista() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="respository-list">
            <h1> Lista de Repositório</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

            </ul>


        </section>
    )
}