import { Component } from 'react';

import Message from './Message';
import refreshComponent from '../hocs/refreshComponent';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.refreshCount);

        return this.props.refreshCount ? <Message text="All rights reserved &copy;" /> : null;
    }
}

// hoc(Footer);
export default refreshComponent(Footer);