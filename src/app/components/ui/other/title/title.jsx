import React from 'react';

const Title = ({body, noBr, strong, classNames}) => {
    return (
        <h2 className={`text-[2vw] sm:text-[4vw] sm:leading-[5vw] leading-[2.5vw] ${classNames}`}>{body}<br
            className={`${noBr && 'hidden'}`}/><strong>{strong}</strong></h2>
    );
};

export default Title;