import Book from "./Book.js";

function BookList(props) {

    return(
        <ul>
            {props.books.map((x) => <Book key={x.title} {...x}/>)}
        </ul>
    );
}

export default BookList;