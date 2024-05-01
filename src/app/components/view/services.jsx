"use client"
/**
 * author : Sudeera Madushan
 * date : 3/22/2024
 * project : zenex-web
 */

import * as React from 'react';
import {Slider} from "../ui/service/slider/slider";
import Title from "../ui/other/title/title";
export const imageUrl = process.env.IMAGE_URL;
const testimonials = [
    {
        id: 3,
        title: "Web Design & Development",
        content: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        imgSrc: `${imageUrl}images/code-icon.png`
    },
    {
        id: 4,
        title: "Software Testing Service",
        content: "Ensure software quality with our comprehensive testing solutions. Detect and resolve issues for flawless user experiences.",
        imgSrc: `${imageUrl}images/chart-icon.png`
    },
    {
        id: 0,
        title: "Mobile App Development",
        content: "Mobile apps are indispensable in today's digital landscape. Let us build yours to perfection, ensuring it reflects your vision and captivates your audience.",
        imgSrc: `${imageUrl}images/mobile-chart-icon.png`
    },
    {
        id: 1,
        title: "Software Consulting Services",
        content: "Elevate your business with our expert software consulting services. From strategy to execution, we empower you to thrive in the digital realm.",
        imgSrc: `${imageUrl}images/lock-icon.png`
    },
    {
        id: 2,
        title: "Cloud Computing Solutions",
        content: "Embrace the future with our cloud solutions. Scale effortlessly, boost efficiency, and secure your data in the ever-evolving digital sphere.",
        imgSrc: `${imageUrl}images/monitor-icon.png`
    },
]
const Services = () => {

    return (
        <main
            className={`flex  flex-col items-center justify-between pt-[2vw] pb-[2vw] bg-[#F7F7FA] mb-[2vw] border-y-[0.1vw]`}
        >
            <Title classNames={"mb-[2vw]"} strong={"Services we offer"} noBr={true}/>
            <div className="w-screen">
                <Slider options={{align: "center"}}>
                    {testimonials}
                </Slider>
            </div>
        </main>
    );
};
export default Services;