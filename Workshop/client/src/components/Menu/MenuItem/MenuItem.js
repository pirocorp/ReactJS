import style from './MenuItem.module.css'

function MenuItem({
    children,
    onClick,
    id,
    href,
    isSelected
}){
    let styles = [style.menuListItem];

    if(isSelected){
        styles.push(style.menuItemSelected);
    } 

    return(
        <li className={styles.join(' ')}>
            <a href={href} onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;