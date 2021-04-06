import ThemeContext from './ThemeContext';

function Button({
    buttonClickHandler
}){
    return (
        <ThemeContext.Consumer>
            {
                ([ theme ]) => 
                    <button 
                        style={{backgroundColor: theme.color === 'dark' ? 'darkgray' : 'lightgreen' }} 
                        onClick={ buttonClickHandler }
                        className="btn"
                    >
                        { theme.color }
                    </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;