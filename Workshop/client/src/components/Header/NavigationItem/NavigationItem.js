import style from './NavigationItem.module.css';

function NavigationItem({
    children
}) {
    return(
        <li className={style.navigationListItem}>
            {children}
        </li>
    );
}

export default NavigationItem;