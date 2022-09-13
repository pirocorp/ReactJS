import Book from "./Book.js";

function BookList(props) {

    var bookElements = props.books.map(function (book) {
        return React.createElement(Book, Object.assign({ key: book.title }, book));
    });

    return React.createElement(
        "ul",
        null,
        bookElements
    );
}

export default BookList;