/**
 * author : Sudeera Madushan
 * date : 3/21/2024
 * project : zenex-web-next
 */

import React from 'react';
import {FaFacebookF, FaWhatsapp} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa6";
import Image from "next/image";
import SocialLink from "./../../components/ui/footer/socialLink";
const imageUrl = process.env.IMAGE_URL;
const Footer = () => {
    return (
        <footer className={"text-gray-400 border-t pt-[1.5vw]"}>
            <section
                className={"flex justify-center mb-[1vw] text-[1vw] gap-[5vw] sm:grid sm:grid-cols-3 sm:px-[8vw]  sm:text-[1.7vw] sm:gap-0"}>
                <div className={"max-w-[22vw]  sm:max-w-[40vw]"}>
                    <div className={"font-bold flex text-gray-800 items-center"}>
                        <Image src={`${imageUrl}images/headerLogo.png`}
                             alt='headerLogo.png' className='w-[2.5vw] sm:w-[5vw]' height={500}
                             width={500}/>
                        <h1 className='text-[1.2vw] sm:text-[2.4vw]'>Zenex Solutions</h1>
                    </div>
                    <h1 className={"leading-[1.5vw] mt-[0.8vw] sm:leading-[2vw] sm:m-[1vw]"}>Creating custom software
                        products that drive growth and
                        efficiency</h1>
                    <Image className={"w-[11vw] mt-[1vw] sm:w-[20vw] sm:m-[2vw]"}
                         src={`${imageUrl}images/footer-badge.png`}
                         alt="google badge"
                         width={339} height={90}/>
                </div>
                <div>
                    <ul className={"flex-col leading-[1.8vw]  sm:leading-[2.3vw]"}>
                        <li className={"font-bold text-gray-800 mb-[0.5vw]"}>Links</li>
                        <li className={"hover:cursor-pointer"}>About us</li>
                        <li className={"hover:cursor-pointer"}>Services</li>
                        <li className={"hover:cursor-pointer"}>Case Studies</li>
                        <li className={"hover:cursor-pointer"}>How it works</li>
                        <li className={"hover:cursor-pointer"}>Blog</li>
                        <li className={"hover:cursor-pointer"}>Careers</li>
                        <li className={"hover:cursor-pointer"}>Areas We Serve</li>
                    </ul>
                </div>
                <div className={"max-w-[20vw]  sm:max-w-[40vw] "}>
                    <h1 className={"font-bold text-gray-800"}>Contact us</h1>
                    <p className={"mt-[1vw] leading-[1.5vw] sm:leading-[2vw] "}>Unleash Your Business Potential with Our
                        Software
                        Solutions. Get in Touch!</p>
                    <h1 className={" mt-[0.5vw]"}>info@zenexsltns.com</h1>
                    <h1 className={" mt-[0.5vw]"}>+94 77 884 3834</h1>
                </div>
                <div className={"text-gray-800 flex gap-[1vw] text-[1.5vw] items-end sm:col-span-3 sm:justify-center"}>
                    <SocialLink
                        href={"https://www.facebook.com/zenexsolutions"} label={"Facebook"}>
                        <FaFacebookF/>
                    </SocialLink>
                    <SocialLink
                        label={"Instagram"}
                        href={"https://www.instagram.com/zen_ex_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
                        <FiInstagram/>
                    </SocialLink>
                    <SocialLink
                        label={"Whatsapp"}
                        href={"https://wa.me/message/U4CHDLCN7SBRL1"}>
                        <FaWhatsapp/>
                    </SocialLink>
                    <SocialLink
                        label={"LinkedinIn"}
                       href={"https://lk.linkedin.com/company/zenex-solutions-pvt-ltd"}>
                        <FaLinkedinIn/>
                    </SocialLink>
                </div>
            </section>
            <div className={"text-[0.8vw] text-center border-t py-[1vw]"}>© 2024 Copyright by Zenex Solutions. All
                rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
