import React from "react";

const Author = (prop) => {
    return <p className='author' style={{color:`${prop.colors}`}}>{prop.author}</p>
};

export default Author;
