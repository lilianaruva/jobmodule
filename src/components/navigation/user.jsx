import React from "react";

const User = ({photo, name}) =>{
    return(
        <>
        <img src={photo}></img>
        <h2>{name}</h2>
        </>
    )
}

export default User;