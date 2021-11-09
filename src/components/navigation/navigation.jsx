import React from "react";
import Items from "./items";
import User from "./user";
import './navigation.css';

import profile from './photo.jpg';

const Navigation = () => {
    const menu = ["My Profile", "My Hours", "My Payments"];
    return (
        <div className="library active-library">
            <div className="profile">
                <User photo={profile} name="Juan Carlos Gallegos Ruvalcaba" />
            </div>
            <div className="space-items">
            {menu.map((item) => (
                <div className="library-items">
                    <Items title={item} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Navigation;