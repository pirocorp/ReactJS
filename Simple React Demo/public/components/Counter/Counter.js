var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import CounterButton from "./CounterButton.js";

function Counter() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        count = _React$useState2[0],
        setCount = _React$useState2[1];

    var clickHandler = function clickHandler() {
        setCount(function (c) {
            return c + 1;
        });
    };

    return React.createElement(
        "div",
        null,
        React.createElement(CounterButton, { clickHandler: clickHandler, clicks: count })
    );
}

export default Counter;