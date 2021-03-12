import style from './Menu.module.css'

import MenuItem from './MenuItem'

function Menu() {
    return(
        <aside className={style.menu}>
            <ul>
                <MenuItem href="#">Going to 1</MenuItem>
                <MenuItem href="#">Going to 2</MenuItem>
                <MenuItem href="#">Going to 3</MenuItem>
                <MenuItem href="#">Going to 4</MenuItem>
                <MenuItem href="#">Going to 5</MenuItem>
                <MenuItem href="#">Going to 6</MenuItem>
                <MenuItem href="#">Going to 7</MenuItem>
                <MenuItem href="#">Going to 8</MenuItem>
                <MenuItem href="#">Going to 9</MenuItem>
                <MenuItem href="#">Going to 10</MenuItem>
                <MenuItem href="#">Going to 11</MenuItem>
            </ul>
        </aside>
    );
}

export default Menu;