import style from './NavigationItem.module.css';

function NavigationItem(props) {
    return(
        <li className={style.navigationListItem}>
            <a href={props.href}>
                {props.children}
            </a>
        </li>
    );
}

export default NavigationItem;