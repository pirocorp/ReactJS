import style from './Header.module.css';

import NavigationItem from './NavigationItem/';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return(
        <nav className={style.navigation}>
            <ul>
                <NavigationItem>
                    <Link to="/">
                        <img src="/logo/white-origami-bird.png" alt="origami bird logo" />
                    </Link>
                </NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about">About</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/contact">Contact</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/pesho">Pesho</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/gosho">Gosho</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/stamat">Stamat</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/mariyka">Mariyka</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/malinka">Malinka</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/tosho">Tosho</NavLink></NavigationItem>
                <NavigationItem><NavLink exact={true} activeClassName={style.active} to="/about/plamen">Plamen</NavLink></NavigationItem>
            </ul>
        </nav>
    );
}

export default Header;