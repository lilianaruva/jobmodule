import React from "react";
import Items from "./items";
import './navigation.css';

const Navigation = () => {
    const menu = ["My Profile", "My Hours", "My Payments"];
    return (
        <div className="library active-library">
            {menu.map((item) => (
                <div className="library-items">
                    <Items title={item} />
                </div>
            ))}
        </div>
    )
}

export default Navigation;