import React from 'react';

import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

class AdvancedApp  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTheme: 'dark'
        }        
    }

    onChangeThemeClickHandler () {
        this.setState(oldState => 
            ({ currentTheme: oldState.currentTheme === 'dark' ? 'light' : 'dark' }));
    };

    render() {
        const contextObject = {
            theme: this.state.currentTheme,
            onChangeThemeClickHandler: this.onChangeThemeClickHandler.bind(this)
        };

        return(
            <ThemeContext.Provider value={contextObject}>
                <Toolbar />
            </ThemeContext.Provider>            
        )
    };
};

export default AdvancedApp;