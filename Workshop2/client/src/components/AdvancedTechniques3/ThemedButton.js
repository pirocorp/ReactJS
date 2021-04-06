import { useContext } from 'react';

import ThemeContext from './ThemeContext';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

function ThemedButton() {
    const [theme, dispatch] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        /* dispatch( {
            payload: theme.color === 'dark' ? 'light' : 'dark',
            type: 'CHANGE_COLOR',
        } ); */

        dispatch({ type: 'TOGGLE_COLOR' })
    };

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
}

export default ThemedButton;