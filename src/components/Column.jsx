import React from "react";

const Column = ({ isOver, children }) => {
    const className = isOver ? "highlight-region" : "";

    return (
        <div className={`column${className}`}>
            {children}
        </div>
    )
}

export default Column;