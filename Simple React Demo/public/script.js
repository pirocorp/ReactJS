// Dom element
var rootElement = document.getElementById('root');

// React element
var root = ReactDOM.createRoot(rootElement);

var helloWorld = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello World"
    ),
    React.createElement(
        "h2",
        null,
        "From React JSX !!!"
    )
);

root.render(helloWorld);
