import React from 'react';
import {FaFacebookF} from "react-icons/fa";
import Link from "next/link";

const SocialLink = ({children, href, label}) => {
    return (
        <Link className={"p-[0.6vw] rounded-full shadow-lg"} target={'_blank'}
              href={href} rel="noreferrer"
              aria-label={label}
        >
            {children}
        </Link>
    );
};

export default SocialLink;