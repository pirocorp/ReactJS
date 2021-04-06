import React from 'react';

import ThemeContext from './ThemeContext';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

class ThemedButton extends React.Component {

    render() {
        return (
/*             <ThemeContext.Consumer>
                {
                    context => 
                        <Button 
                            buttonClickHandler={context.onChangeThemeClickHandler}
                        />
                }
            </ThemeContext.Consumer> */

            <>
                <ButtonHeader />
                <Button buttonClickHandler={this.context.onChangeThemeClickHandler} />
            </>
        );
    }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;