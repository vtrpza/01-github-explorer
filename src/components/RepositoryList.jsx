import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

function RepositoryList() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then((res) => res.json()).then((data) => setRepos(data))
    }, [])

    return ( 
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
               {
                   !!repos && repos.map((el) => {
                       return <RepositoryItem key={el.name} repository={el}/>
                   })
               }
            </ul>
        </section>
     );
}

export default RepositoryList;