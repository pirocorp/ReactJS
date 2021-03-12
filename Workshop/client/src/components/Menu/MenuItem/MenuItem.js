import style from './MenuItem.module.css'

function MenuItem({
    children,
    href
}){
    return(
        <li className={style.menuListItem}>
            <a href={href}>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;