import './DemoFunc.css';

import { useState } from 'react';

function DemoFunc() {
    const [username, setUsername] = useState('Anonymous');

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    };

    function onUsernameChangeHandler(e) {
        setUsername(e.target.value);
    };

    return(
        <div className="form-container">
            <h1>Functional Controlled Component</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={onUsernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default DemoFunc;