import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import './DemoFunc2.css';

function DemoFunc2() {
    const [state, setState] = useState({
        count: 1,
        step: 1,
    });

    /* const [character, setCharacter] = useState({}); */
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${state.count}`, {});

    // [] - componentDidMount
    // [state.count] componentDidUpdate
    /* useEffect(() => {
        fetch(`https://swapi.dev/api/people/${state.count}`)
            .then(res => res.json())
            .then(result => setCharacter(result));

        // Clean up function
        return () => {
            console.log('ComponentWillUnmount');
        }
    }, [state.count]); */

    function onCounterButtonClickHandler() {
        setState(oldState => ({...oldState, count: oldState.count + oldState.step})); // Thread safety
    }

    function onStepSelectChangeHandler(e) {
        const stepValue = Number(e.target.value);

        setState(oldState => ({ ...oldState, step: stepValue }))
    }

    return(
        <>
            <h1>{isCharacterLoading ? `Loading ...` : `Star Wars Character: ${character?.name}`} {  }</h1>
            <div>{ state.count }</div>

            <div>
                <button onClick={onCounterButtonClickHandler}>Increment</button>
            </div>
            
            <div>
                <label htmlFor="step">Step</label>
                <select name="step" id="step" onChange={onStepSelectChangeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        </>
    );
}

export default DemoFunc2;