"use client"
import React, {useState} from 'react';
import {HiMenu} from "react-icons/hi";

const MenuButton = ({toggleHeaderMargin}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuClick = () => {
        if (isOpen){
            document.getElementById('header').classList.remove('sm:left-0')
            document.getElementById('header').classList.add('sm:left-[-60vw]')
            setIsOpen(false)
        }else {
            document.getElementById('header').classList.remove('sm:left-[-60vw]')
            document.getElementById('header').classList.add('sm:left-0')
            setIsOpen(true)
        }
    };
    return (
        <HiMenu className={"hidden sm:block fixed left-[3.6vw] top-[3vw] sm:text-[8vw] z-10"}
            onClick={handleMenuClick}
        />
    );
};

export default MenuButton;