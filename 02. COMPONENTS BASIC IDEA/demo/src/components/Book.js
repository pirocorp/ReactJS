 function Book(props) {
    return (
        <article onClick={props.clickHandler}>
            <h3>{ props.title }</h3>
            <p>{ props.description || 'Default Description' }</p>
        </article>
    );
 }

 export default Book;