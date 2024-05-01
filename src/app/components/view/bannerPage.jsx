import {HiMenu} from "react-icons/hi";
import React from "react";
import Image from "next/image";
import MenuButton from "../ui/bannerPage/menuButton";
const imageUrl = process.env.IMAGE_URL;
/**
 * author : Sudeera Madushan
 * date : 3/21/2024
 * project : zenex-web-next
 */
const BannerPage = ({toggleHeaderMargin}) => {


    return (
        <section className={"flex justify-center pt-[7vw] mb-[6vh] sm:mt-0 sm:pt-[10vw] sm:flex-col sm:items-center"}
                 id='about'>
            <MenuButton/>
            <div className={"mt-[2vw] mr-[7vw] sm:text-center sm:mr-0"}>
                <h1 className={"text-[3.7vw] font-light leading-[4.5vw] tracking-wide sm:text-[6vw] sm:leading-[8vw]"}>Great <span
                    className={"font-bold bg-gradient-to-tr from-purple-700 to-pink-500 bg-clip-text text-transparent"}>Product</span> is <br/>
                    <span className={"font-extrabold"}>built by great <span
                        className={"bg-gradient-to-tr from-purple-700 to-pink-500 bg-clip-text text-transparent"}>teams</span></span>
                </h1>
                <p className={"mt-[2vw] leading-[1.5vw] text-[1vw] text-gray-800 sm:text-[2vw] sm:leading-[2.8vw]"}>We
                    help build and manage a team
                    of world-class developers <br/> to bring your vision to life</p>
                <button id='service'
                        className={"bg-[#3D63EA] text-white mt-[2.2vw] px-[1.5vw] py-[0.7vw] rounded-[0.4vw] text-[0.8vw] sm:text-[2vw] sm:pt-[1vw]"}>Let’s
                    get started!
                </button>
            </div>
            <div className={"w-[30vw] mt-[3vw] sm:hidden"}>
                <img src={`${imageUrl}images/new_banner_image.png`} alt="bannerImage"
                     width={1000} height={720}/>
            </div>
        </section>
    )
}
export default BannerPage;
