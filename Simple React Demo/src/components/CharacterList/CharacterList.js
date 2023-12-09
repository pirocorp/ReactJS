function CharacterList() {
    const [characters, setCharacters] = React.useState();

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then(res => res.json())
            .then(result => {
                setCharacters(result);
            });
    }, []);

    if(!characters){
        return(
            <ul>
                <li>Loading ...</li>
            </ul>
        );
    }    

    return(
        <ul>
            {characters.results.map(x => <li key={x.url}>{x.name}</li>)}
        </ul>
    );
}

export default CharacterList;