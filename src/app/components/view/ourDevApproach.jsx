import React from 'react';
import GradientLine from "../../components/ui/other/gradientLine/gradientLine";
import Title from "../../components/ui/other/title/title";
import Image from "next/image";
import DevCard from "../../components/ui/ourDevApproach/devCard";
export const imageUrl = process.env.IMAGE_URL;
const OurDevApproach = () => {

    return (
        <div className={'flex items-center flex-col px-[4vw] py-[2vw] bg-[#F7F7FA] border sm:py-[4vw]'}>
            <GradientLine classNames={' mb-[1vw]'}/>
            <Title body={'Our design and'} strong={'development approach'} classNames={'text-center'}/>
            <div className={'grid grid-cols-2 m-[2vw] gap-[2vw] px-[2vw] sm:mt-[4vw] sm:grid-cols-1' }>
                <DevCard
                    title={"UX Driven Engineering"}
                    body={"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}
                    alt={"rocket image"}
                    image={`${imageUrl}images/rocket_perspective_matte.png`}
                    imageBg={"bg-gradient-to-tr to-[#29272F] from-[#27272B]"}
                    />
                <DevCard
                    title={"Developing Shared Understanding"}
                    body={"At our core, we prioritize mutual understanding among stakeholders. Transparent communication and collaborative workshops ensure a shared vision, leading to successful project outcomes."}
                    alt={"code block image"}
                    image={`${imageUrl}images/code-icon.png`}
                    imageBg={"bg-gradient-to-tr to-[#68DBF2] from-[#509CF5]"}
                    />
                <DevCard
                    title={"Proven Experience and Expertise"}
                    body={"With extensive expertise and experience across industries, our team delivers tailored, innovative solutions to complex challenges, ensuring client satisfaction."}
                    alt={"hart rate image"}
                    image={`${imageUrl}images/heart_rate_perspective_matte.png`}
                    imageBg={"bg-gradient-to-tr from-[#FF3D9A] to-[#FF92AE]"}
                    />
                <DevCard
                    title={"Security & Intellectual Property (IP)"}
                    body={"We prioritize client data and IP protection, implementing robust security measures and clear ownership protocols to ensure confidentiality and legal protection."}
                    alt={"shield image"}
                    image={`${imageUrl}images/shield_perspective_matte.png`}
                    imageBg={"bg-gradient-to-tr from-[#24E795] to-[#67E9F1]"}
                    />
                <DevCard
                    title={"Code Reviews"}
                    body={"To ensure quality and reliability, we conduct rigorous code reviews, utilizing peer feedback and automated tools to maintain high performance, scalability, and maintainability standards."}
                    alt={"correct image"}
                    image={`${imageUrl}images/success_perspective_matte.png`}
                    imageBg={"bg-gradient-to-tr from-[#F7936F] to-[#FFEF5E]"}
                    />
                <DevCard
                    title={"Quality Assurance & Testing"}
                    body={"Quality is key. Our comprehensive testing covers functionality, performance, and usability, ensuring reliable, effective solutions that exceed client expectations for satisfaction."}
                    alt={"Padlock_perspective_matte.png"}
                    image={`${imageUrl}images/padlock_perspective_matte.png`}
                    imageBg={"bg-gradient-to-tr from-[#57007B] to-[#F76680]"}
                    />

            </div>
        </div>
    );
};

export default OurDevApproach;