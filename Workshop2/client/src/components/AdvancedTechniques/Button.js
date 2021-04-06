import ThemeContext from './ThemeContext';

function Button({
    buttonClickHandler
}){
    return (
        <ThemeContext.Consumer>
            {
                context => 
                    <button 
                        style={{backgroundColor: context.theme === 'dark' ? 'darkgray' : 'lightgreen' }} 
                        onClick={ buttonClickHandler }
                        className="btn"
                    >
                        {context.theme}
                    </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;