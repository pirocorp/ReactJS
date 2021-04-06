import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ButtonHeader() {
    const [ theme ] = useContext(ThemeContext);

    return(
        <header style={{ color: theme.color == 'dark' ? "darkgrey" : "lightpink" }}>
            <h1>Some Cool Title Here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis labore molestiae nam voluptatibus, consectetur repellendus maxime quas eum molestias?</p>
        </header>
    );
}

export default ButtonHeader;