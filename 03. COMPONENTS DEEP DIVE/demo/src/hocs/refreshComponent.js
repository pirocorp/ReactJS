import { Component } from 'react';

function refreshComponent(WrappedComponent) {
    return class RefreshComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                refreshCount: 0
            }
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ refreshCount: this.state.refreshCount + 1 });
            }, 2000);
        }

        render() {
            return <WrappedComponent {...this.props} refreshCount={this.state.refreshCount}/>
        }
    }
}

export default refreshComponent;