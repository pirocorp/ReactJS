import style from './Header.module.css';

import NavigationItem from './NavigationItem/';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className={style.navigation}>
            <ul>
                <NavigationItem>
                    <Link to="/">
                        <img src="/logo/white-origami-bird.png" alt="origami bird logo" />
                    </Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to="/about">About</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to="/contact">Contact</Link>
                </NavigationItem>
            </ul>
        </nav>
    );
}

export default Header;