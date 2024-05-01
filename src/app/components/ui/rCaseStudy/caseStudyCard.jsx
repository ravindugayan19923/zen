import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";

const CaseStudyCard = ({bgColor, image, title, content}) => {
    return (
        <div className={`flex my-[1.3vw] mx-[5vw]  rounded-[1.5vw] ${bgColor}`}>
            <img className={'w-[35vw] rounded-[0.5vw] sm:hidden'} alt={'fireFitImage'} src={image} width={3000} height={2000}/>
            <div className={'py-[3vw] px-[5vw] sm:text-center'}>
                <h2 className={'font-bold text-[1.7vw] text-gray-800 mb-[1vw] sm:text-[3vw]'}>{title}</h2>
                <p className={'text-gray-700 text-[1.1vw] sm:text-[1.7vw]'}>{content}</p>
                <div className={'flex justify-end mt-[2vw]'}>
                    <button
                        className={'flex items-center font-bold text-[1.1vw] sm:text-[1.7vw] bg-gradient-to-tr from-purple-700 to-pink-500 bg-clip-text text-transparent'}>
                        Read more <IoIosArrowForward className={'mt-[0.2vw] text-pink-500'}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;