/**
 * author : Sudeera Madushan
 * date : 3/21/2024
 * project : zenex-web-next
 */

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ContactUsBtn from "../ui/header/contactUsBtn";
const imageUrl = process.env.IMAGE_URL;
const Header = () => {


    return (
        <div
            id={"header"}
            className={"fixed w-full top-0 z-20 flex md:ml-0 justify-center gap-[3.35vw] bg-gray-50 shadow-lg items-center p-[1vw] ms-0 sm:flex-col " +
                "sm:w-6/12 sm:h-[100vh] sm:items-start sm:justify-start sm:p-[3vw]  sm:fixed sm:z-10 sm:gap-[4vw] sm:left-[-60vw] transform duration-500"}
            // style={{marginLeft: headerMargin}}
        >
            <div
                className={"text-2xl font-bold flex text-gray-800 items-center sm:justify-around sm:w-full sm:text-[10vw] "}>
                <Image src={`${imageUrl}images/headerLogo.png`} alt='headerLogo.png'
                     className='w-[3.5vw] sm:hidden' width={500} height={500}/>
                <h1 className='text-[1.7vw] sm:ms-[9vw] sm:text-[4vw] sm:mt-[2vw] sm:leading-none'>Zenex Solutions</h1>
            </div>
            <div
                className={"flex text-gray-500 font-semibold gap-[0.2vw] text-[1.2vw] sm:flex-col sm:text-[4vw] sm:w-full sm:gap-[5vw] sm:ms-[2vw] sm:pr-[4vw] sm:mt-[3vw]"}>
                <Link href={'#about'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw] '>About
                    us
                </Link>
                <Link href={'#service'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw]'>Services
                </Link>
                <Link href={'#caseStudy'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw]'>Case
                    Studies
                </Link>
                <Link  href={'#blog'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw]'>Blog
                </Link>
                <Link  href={'#blog'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw]'>How
                    it Works
                </Link>
                <Link  href={'#careers'}
                      className='cursor-pointer px-[1vw] py-[0.5vw] hover:bg-gray-200 transition duration-300 rounded-[0.4vw] sm:border-b-[0.5vw]'>Careers
                </Link>
            </div>
            <ContactUsBtn/>
        </div>
    );
};

export default Header;
