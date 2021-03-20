import './CategoryNavigation.css';

import { NavLink } from 'react-router-dom';

function CategoryNavigation() {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/Cat">Cats</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/Dog">Dogs</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/Parrot">Parrots</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/Reptile">Reptiles</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-link-selected" to="/categories/Other">Others</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default CategoryNavigation;