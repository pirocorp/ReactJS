import style from './NavigationItem.module.css';

function NavigationItem({
    children
}) {
    return(
        <li className={style.navigationListItem}>
            <a>
                {children}
            </a>
        </li>
    );
}

export default NavigationItem;