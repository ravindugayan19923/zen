import React from 'react';
import GradientLine from "../ui/other/gradientLine/gradientLine";
import Title from "../ui/other/title/title";
import CaseStudyCard from "../ui/rCaseStudy/caseStudyCard";

export const imageUrl = process.env.IMAGE_URL;
const RecentCaseStudy = () => {
    return (
        <div className={'flex items-center flex-col px-[4vw] pb-[2vw] bg-[#F7F7FA] pt-[3vw] border sm:py-[5vw]'}>
            <GradientLine classNames={' mb-[1vw]'}/>
            <Title body={'Our recent '} strong={'Case studies'} classNames={'text-center'}/>
            <div className={'flex flex-col mt-[2vw]'}>
                <CaseStudyCard
                    bgColor={'bg-[#F1F2FF]'}
                    image={`${imageUrl}images/fire-fit-image.jpg`}
                    content={'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'}
                    title={'Website Design for SCFC Canada'}
                />
                <CaseStudyCard
                    bgColor={'bg-[#F0FFF7]'}
                    image={`${imageUrl}images/my-goals-image.jpg`}
                    title={'Website Design for SCFC Canada'}
                    content={'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'}
                />
                <CaseStudyCard
                    bgColor={'bg-[#FFF4F4]'}
                    image={`${imageUrl}images/meditation-app-image.jpg`}
                    title={'Website Design for SCFC Canada'}
                    content={'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'}
                />
            </div>
        </div>);
};

export default RecentCaseStudy;