function CounterButton(props) {
    return(
        <button className="counter" onClick={props.clickHandler}>
            Click me! I'm a counter [{props.clicks}]
        </button>
    );
}

export default CounterButton;