// Dom element
const rootElement = document.getElementById('root');

// React element
const root = ReactDOM.createRoot(rootElement);

const helloWorld = (
    <header className="site-header">
        <h1>Hello World</h1>
        <h2>From React JSX !!!</h2>
    </header>
);

root.render(helloWorld);