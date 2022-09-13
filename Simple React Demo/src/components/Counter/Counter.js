import CounterButton from "./CounterButton.js";

function Counter() {
    const [count, setCount] = React.useState(0);

    const clickHandler = () => {
        setCount(c => c + 1);
    }

    return(
        <div>
            <CounterButton clickHandler={clickHandler} clicks={count} />
        </div>
    )
}

export default Counter;