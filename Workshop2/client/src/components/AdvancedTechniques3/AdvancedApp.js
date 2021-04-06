import { useReducer } from 'react';

import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

const AdvancedApp = () => {
    /* const[theme, setTheme] = useState({
        color: 'dark',
        size: 'normal',
        font: 'default',
    }); */

    const themeReducer = (state, action) => {
        switch(action.type) {
            case "CHANGE_COLOR":
                return { ...state, color: action.payload };
            case "TOGGLE_COLOR":
                return{ ...state, color: state.color === 'dark' ? 'light' : 'dark' }

            default:
                return state;
        }
    }

    const [theme, dispatch] = useReducer(themeReducer, {
        color: 'dark',
        size: 'normal',
        font: 'default',
    });

    return(
        <ThemeContext.Provider value={[theme, dispatch]}>
            <Toolbar />
        </ThemeContext.Provider>            
    )
};

export default AdvancedApp;