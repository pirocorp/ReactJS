function CounterButton(props) {
    return React.createElement(
        "button",
        { className: "counter", onClick: props.clickHandler },
        "Click me! I'm a counter [",
        props.clicks,
        "]"
    );
}

export default CounterButton;