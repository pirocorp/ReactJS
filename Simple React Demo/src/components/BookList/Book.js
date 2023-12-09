function Book(props){
    const [highlited, setHighlited] = React.useState(false);
    const [deleted, setDeleted] = React.useState(false);

    React.useEffect(() => {
        console.log(`Mounting: ${props.title}`);
    }, []);

    React.useEffect(() => {
        console.log(`Update: ${props.title}`);
    }, [highlited]);

    const onHighlightButtonClickHandler = () => {
        setHighlited(state => !state);
    };

    const onDeleteButtonClickHandler = () => { 
        setDeleted(state => !state);
    }

    let style = {};

    if(highlited){
        style.backgroundColor = 'aqua';
    }

    if(deleted){
        return <h2>Deleted</h2>
    }

    return(    
        <li style={style} className="book-item">
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: {props.price.toFixed(2)}$</div>
                <footer>
                    <button onClick={onHighlightButtonClickHandler}>Highlight</button>
                    <button onClick={onDeleteButtonClickHandler}>Delete</button>
                    <span>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    )
}

export default Book;