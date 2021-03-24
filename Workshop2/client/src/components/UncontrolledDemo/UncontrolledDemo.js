import './UncontrolledDemo.css';

function UncontrolledDemo() {
    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    };

    function onUsernameChangeHandler(e) {
        console.log(e.target.value);
    };

    return(
        <div className="form-container">
            <h1>Uncontrolled Demo Form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={onUsernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default UncontrolledDemo;