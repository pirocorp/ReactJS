import './InputError.css';

function InputError({ children }) {
    if(!children){
        return(
            <></>
        );
    }

    return(
        <div className="input-error">{children}</div>           
    );
}

export default InputError;