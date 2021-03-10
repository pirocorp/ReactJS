import { Component } from 'react';
// No CSS isolation
import './Message.css';

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 1
        };

        console.log('Constructor'); // 1
    }

    componentDidMount() {
        console.log('componentDidMount'); // 3

        // This will update state of the component
        // And react will re render it 
        this.setState({count: 0}); 
    }

    componentDidUpdate() {
        console.log('componentDidUpdate'); // 5
    }

    render() {
        // Inline Styles
        /* let style = {
            backgroundColor: 'pink',
            fontSize: '44px',
        }; */

        let classes = ['footer-message'];

        if(true) {
            classes.push('description');
        }

        console.log('Render'); // 2, 4 - re render

        return <span className={classes.join(' ')} /* style={style} */>{this.props.text}</span>
    }
}

export default Message;