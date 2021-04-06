import ThemeContext from './ThemeContext';

function Button({
    buttonClickHandler
}){
    return (
        <ThemeContext.Consumer>
            {
                ([ theme ]) => 
                    <button 
                        style={{backgroundColor: theme === 'dark' ? 'darkgray' : 'lightgreen' }} 
                        onClick={ buttonClickHandler }
                        className="btn"
                    >
                        { theme }
                    </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;