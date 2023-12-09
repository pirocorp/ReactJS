import { ReactElement } from "react";

// Conventional props
function Heading({ title }: { title: string; }) : ReactElement {
    return <h1>{title}</h1>
}

export default Heading;