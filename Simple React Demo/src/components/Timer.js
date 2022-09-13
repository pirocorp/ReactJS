function Timer() {
    const [time, setTime] = React.useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    const hours = parseInt((time / 3600)).toString().padStart(2, 0);
    const minutes = (parseInt((time / 60)) % 60).toString().padStart(2, 0);
    const seconds = (time % 60).toString().padStart(2, 0);

    return <h2>{hours}:{minutes}:{seconds}</h2>
}

export default Timer;