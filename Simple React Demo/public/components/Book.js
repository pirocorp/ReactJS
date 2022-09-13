function Book(props) {
    return React.createElement(
        "li",
        null,
        React.createElement(
            "article",
            null,
            React.createElement(
                "h2",
                null,
                props.title
            ),
            React.createElement(
                "div",
                null,
                "Year: ",
                props.year
            ),
            React.createElement(
                "div",
                null,
                "Price: ",
                props.price.toFixed(2),
                "$"
            ),
            React.createElement(
                "footer",
                null,
                React.createElement(
                    "span",
                    null,
                    "Author: ",
                    props.author
                )
            )
        )
    );
}

export default Book;