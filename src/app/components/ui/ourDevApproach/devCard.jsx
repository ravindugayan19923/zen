import React from 'react';
import Image from "next/image";

const DevCard = ({title,body, imageBg, image, alt}) => {
    return (
        <div className={"bg-[#FAFAFA] border py-[3vw] px-[2vw] flex"}>
            <div>
                <div className={`w-[4vw] p-[1vw] rounded-[1vw] ${imageBg} `}>
                    <img
                        className={"w-[2vw]"}
                        width={35} height={35}
                           src={image}
                           alt={alt}/>
                </div>
            </div>
            <div className={"ps-[1vw] sm:mt-[-2vw]"}>
                <label className={"font-bold sm:text-[2.5vw] "}>
                    {title}
                </label>
                <p className={"text-[0.9vw] text-gray-700 mt-[0.5vw] sm:ps-[1vw] sm:text-[1.7vw]"}>
                    {body}
                </p>
            </div>
        </div>
    );
};

export default DevCard;