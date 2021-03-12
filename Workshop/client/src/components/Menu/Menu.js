import { useState } from 'react';

import MenuItem from './MenuItem';
import { MENU_ITEMS } from './MenuConstants';

import style from './Menu.module.css';


function Menu() {
    // first element is the value to be preserved
    // second element is a function which changes the value
    // default value can be passed to useState function
    const [currentItem, setCurrentItem] = useState();

    return(
        <aside className={style.menu}>
            <ul>
                {
                    MENU_ITEMS.map(m => 
                        <MenuItem 
                            onClick={setCurrentItem} 
                            id = {m.id}
                            key={m.id} 
                            href="#"
                            isSelected={m.id === currentItem}
                        >
                            {m.text}
                        </MenuItem>
                    )
                }              

            </ul>
        </aside>
    );
}

export default Menu;