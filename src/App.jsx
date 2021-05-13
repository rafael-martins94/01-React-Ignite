import './styles/global.scss';

import { Counter } from './components/Counter';
import { RepositoryLista } from './components/RepositoryList';


export function App () {
    return <>
        <RepositoryLista/>
        <Counter/>
     </>

}