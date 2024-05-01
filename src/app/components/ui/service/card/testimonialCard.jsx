"use client"
/**
 * author : Sudeera Madushan
 * date : 3/22/2024
 * project : zenex-web
 */
import {useEffect, useRef, useState} from "react";

export const TestimonialCard = ({index, title, content, imgSrc}) => {
    const cardRef = useRef(null);
    const [position, setPosition] = useState(0)

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            const handlePositionChange = () => {
                const cardRect = card.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const xPositionInVw = (cardRect.x / viewportWidth) * 100;
                setPosition(xPositionInVw);
            };

            const observer = new ResizeObserver(handlePositionChange);
            observer.observe(card);

            return () => {
                observer.disconnect();
            };
        }
    }, [index]);

    return (

        <div className={`flex-[0_0_25%] md:flex-[0_0_27%]  mb-[1vw] sm:mb-[6vw]`} style={{height: "calc(20vw + 50px)"}}>
            <div
                ref={cardRef}
                className={`h-[18.5vw] w-[23vw] sm:w-[37vw] sm:h-[30vw] cursor-pointer ${
                    position < 56 && position > 30
                        ? "gradient-animation-show"
                        : "gradient-animation-hide"
                } rounded-[0.5vw] p-[0.1vw] pr-[0.05vw] pb-[0.05vw]  shadow-xl cursor-pointer `}
            >
                <div
                    className={"h-full w-[22.8vw] bg-gray-50 rounded-[0.4vw] px-[1vw] sm:w-[36.8vw] hover:bg-gray-100 transition duration-300"}>
                    <div className={"pt-[2.5vw] sm:pt-[5vw]"}>
                        <div
                            className={" w-[3.5vw] p-[1px] rounded-full bg-gradient-to-tr from-purple-700 to-pink-500 sm:w-[7.5vw] sm:p-[0.1vw]"}>
                            <img
                                className={" rounded-full bg-white p-[0.6vw] sm:p-[1.3vw] w-[3.5vw] sm:w-[7.5vw]"}
                                src={imgSrc} alt={imgSrc}
                                width={68}
                                height={68}/>
                        </div>
                    </div>
                    <div className={"mt-[0.9vw] sm:mt-[1.5vw]"}>
                        <h1 className={`${position < 60 && position > 30
                        && "bg-gradient-to-tr from-purple-700 to-pink-500 bg-clip-text text-transparent"} font-bold text-[1.5vw] transition duration-500 sm:text-[2vw]`}>{title}</h1>
                    </div>
                    <div className={"mt-[0.8vw]"}>
                        <p className={"text-gray-700 text-[1vw] sm:text-[1.5vw]"}>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
