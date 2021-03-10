import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props); 

        // this is the internal component state
        this.state = {
            count: 0,
            collectionName: 'My Books'
        };

        // Binding resetCounter context to be always this ;)
        this.resetCounter = this.resetCounter.bind(this)
    }

    incrementCounter(e) {
        /* New state is shallowly merged with original state.
        Think of setState() as a request rather than an immediate command to update the component.
        For better perceived performance, React may delay it
        this.setState({ count: this.state.count + 1 }) */

        /* If the next state depends on the current state, we recommend using the updater function form
                Both state and props received by the updater function are guaranteed to be up-to-date. 
                The output of the updater is shallowly merged with state. */
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrementCounter(e) {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    resetCounter(e) {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div className="counter">
                <h4>{ this.state.collectionName } Counter</h4>

                <button onClick={(e) => this.decrementCounter(e)}>-</button>

                <span> { this.state.count } </span>
                            
                {/* <button onClick={(e) => this.setState((oldState) => ({ count: oldState.count + 1 }))}>+</button> */}
                <button onClick={this.incrementCounter.bind(this)}>+</button>

                <button onClick={this.resetCounter}>Reset</button>
            </div>  
        );
    }
}

export default Counter;