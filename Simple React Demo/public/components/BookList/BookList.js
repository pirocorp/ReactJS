import Book from "./Book.js";

function BookList(props) {

    return React.createElement(
        "ul",
        null,
        props.books.map(function (x) {
            return React.createElement(Book, Object.assign({ key: x.title }, x));
        })
    );
}

export default BookList;