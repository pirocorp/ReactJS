import { useContext } from 'react';

import ThemeContext from './ThemeContext';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

function ThemedButton() {
    const [theme, setTheme] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        setTheme(oldState => (oldState === 'dark' ? 'light' : 'dark' ));
    };

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
}

export default ThemedButton;