import React from "react";
import FsSvgIcons from "../../fsSvgIcons";

const Items = ({ title }) => {
    return (
        <>
            <FsSvgIcons type="maletin" />
            <h2>{title}</h2>
        </>
    )
}

export default Items;