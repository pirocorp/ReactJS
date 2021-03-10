import { Component } from 'react';

import Show from './Show';

class Input extends Component {
    constructor(props) { 
        super(props);

        // this is the internal component state
        this.state = { 
            value: ""
        };

        // Binding handleChange  context to be always this ;)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({ value: event.target.value });
    }
        
    render() { 
        return (
            <div>
                <input
                    name="firstName"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Show value={this.state.value} />
            </div>
        );
    }
}

export default Input;