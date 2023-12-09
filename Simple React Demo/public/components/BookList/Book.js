var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Book(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        highlited = _React$useState2[0],
        setHighlited = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        deleted = _React$useState4[0],
        setDeleted = _React$useState4[1];

    React.useEffect(function () {
        console.log("Mounting: " + props.title);
    }, []);

    React.useEffect(function () {
        console.log("Update: " + props.title);
    }, [highlited]);

    var onHighlightButtonClickHandler = function onHighlightButtonClickHandler() {
        setHighlited(function (state) {
            return !state;
        });
    };

    var onDeleteButtonClickHandler = function onDeleteButtonClickHandler() {
        setDeleted(function (state) {
            return !state;
        });
    };

    var style = {};

    if (highlited) {
        style.backgroundColor = 'aqua';
    }

    if (deleted) {
        return React.createElement(
            "h2",
            null,
            "Deleted"
        );
    }

    return React.createElement(
        "li",
        { style: style, className: "book-item" },
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
                    "button",
                    { onClick: onHighlightButtonClickHandler },
                    "Highlight"
                ),
                React.createElement(
                    "button",
                    { onClick: onDeleteButtonClickHandler },
                    "Delete"
                ),
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