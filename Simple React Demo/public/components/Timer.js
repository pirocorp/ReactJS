var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Timer() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        time = _React$useState2[0],
        setTime = _React$useState2[1];

    setTimeout(function () {
        setTime(time + 1);
    }, 1000);

    var hours = parseInt(time / 3600).toString().padStart(2, 0);
    var minutes = (parseInt(time / 60) % 60).toString().padStart(2, 0);
    var seconds = (time % 60).toString().padStart(2, 0);

    return React.createElement(
        "h2",
        null,
        hours,
        ":",
        minutes,
        ":",
        seconds
    );
}

export default Timer;