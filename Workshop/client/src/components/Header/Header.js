import style from './Header.module.css';

import NavigationItem from './NavigationItem/'

function Header() {
    return(
        <nav className={style.navigation}>
            <ul>
                <NavigationItem href="#"><img src="/logo/white-origami-bird.png" alt="origami bird logo"/></NavigationItem>
                <NavigationItem href="#">Going to 1</NavigationItem>
                <NavigationItem href="#">Going to 2</NavigationItem>
                <NavigationItem href="#">Going to 3</NavigationItem>
                <NavigationItem href="#">Going to 4</NavigationItem>
                <NavigationItem href="#">Going to 5</NavigationItem>
                <NavigationItem href="#">Going to 6</NavigationItem>
                <NavigationItem href="#">Going to 7</NavigationItem>
                <NavigationItem href="#">Going to 8</NavigationItem>
                <NavigationItem href="#">Going to 9</NavigationItem>
                <NavigationItem href="#">Going to 10</NavigationItem>
                <NavigationItem href="#">Going to 11</NavigationItem>
            </ul>
        </nav>
    );
}

export default Header;