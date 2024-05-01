'use client'
import React from 'react';

const ContactUsBtn = () => {
    const handleContactUsClick = () => {
        window.location.href = 'mailto:info@zenexsltns.com';
    };
    return (
        <div className='items-center mr-[1.3vw]'>
            <button
                className={"bg-gradient-to-tr from-[#57007B] to-[#6675F7] py-[0.5vw] px-[2vw] rounded-[0.4vw] text-gray-50 text-[1vw] sm:text-[4vw] sm:m-[2vw]"}
                onClick={handleContactUsClick}
            >Contact us
            </button>
        </div>
    );
};

export default ContactUsBtn;