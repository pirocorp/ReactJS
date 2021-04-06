import { useState } from 'react';

import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

const AdvancedApp = () => {
    const[theme, setTheme] = useState('dark');

    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Toolbar />
        </ThemeContext.Provider>            
    )
};

export default AdvancedApp;