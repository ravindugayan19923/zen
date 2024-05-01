import React from 'react';

const GradientLine = ({classNames}) => {
    return (
        <div
            className={`w-[4vw] h-[0.3vw] rounded-[0.5vw] bg-gradient-to-r from-purple-800 to-pink-600 ${classNames}`}/>
    );
};

export default GradientLine;