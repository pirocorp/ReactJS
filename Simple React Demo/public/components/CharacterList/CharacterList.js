var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function CharacterList() {
    var _React$useState = React.useState(),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        characters = _React$useState2[0],
        setCharacters = _React$useState2[1];

    React.useEffect(function () {
        fetch("https://swapi.dev/api/people").then(function (res) {
            return res.json();
        }).then(function (result) {
            setCharacters(result);
        });
    }, []);

    if (!characters) {
        return React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "Loading ..."
            )
        );
    }

    return React.createElement(
        "ul",
        null,
        characters.results.map(function (x) {
            return React.createElement(
                "li",
                { key: x.url },
                x.name
            );
        })
    );
}

export default CharacterList;