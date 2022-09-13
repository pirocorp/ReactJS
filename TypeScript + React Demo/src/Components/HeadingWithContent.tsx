import { ReactElement, ReactNode } from "react";

// Conventional props
function HeadingWithContent({ children }: { children: ReactNode }) : ReactElement {
    return <h1>{children}</h1>
}

export default HeadingWithContent;