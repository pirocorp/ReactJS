import { title } from "process";
import React, { ReactNode } from "react";

// Class component <props, state>
class MyHeader extends React.Component<{
    title: ReactNode,
}>{
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default MyHeader;