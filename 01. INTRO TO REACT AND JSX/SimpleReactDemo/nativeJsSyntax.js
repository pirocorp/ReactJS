const domElement = document.getElementById('root');

/* HTML tag, Props (attributes), children */
// Native react JS Syntax
const reactElement = React.createElement(
    'header', 
    {}, 
    React.createElement('h1', {}, 'Hello From React Element'),
    React.createElement('h2', {}, 'Best Client Side Library')
);

ReactDOM.render(reactElement, domElement);