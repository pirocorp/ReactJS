// The component is function which returns JSX
function Header(props){
    // let headingMessage = 'Hello React World';

    return (
        <header>
            <h1>{props.children}</h1>
            <h2>The Best Client Side Library</h2>
        </header>
    )
}

export default Header;