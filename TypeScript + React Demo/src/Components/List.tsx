import { ReactNode } from "react";

// Generic List component
function List<T>({
    items, 
    render
} : {
    items: T[];
    render: (item: T) => ReactNode;
}){
    return(
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
}

export default List;