function RepositoryItem({ repository }) {
    return ( 
    <li>
        <strong>{repository?.name ?? 'Default'}</strong>
        <p>{repository?.description ?? 'Default'}</p>

        <a href={repository?.html_url}>Acessar repositório</a>
    </li> );
}

export default RepositoryItem;