import { ReactNode, useState } from "react";

//Functional props
function TextWithNumber({
    header,
    children
}: {
    header?: (num: number) => ReactNode; // optional parameter
    children: (num: number) => ReactNode;
}) {
    const [state, stateSet] = useState<number>(0);

    return (
        <div>
            {header && <h2>{header?.(state)}</h2>} {/* Conditional rendering if header exists */}            
            <div>
                {children(state)}
            </div>
            <div>
                <button onClick={() => stateSet(s => s + 1)}>Add</button>
            </div>
        </div>
    );
}

export default TextWithNumber;