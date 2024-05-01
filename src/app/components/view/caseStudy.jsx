import {FaArrowRight} from "react-icons/fa6";
import GradientLine from "../ui/other/gradientLine/gradientLine";
import Title from "../ui/other/title/title";
export const imageUrl = process.env.IMAGE_URL;
const CaseStudy = () => {
    return (
        <section>
            <GradientLine classNames={'ms-[13vw] mt-[7vw]'}/>
            <div className="flex justify-center gap-[10vw] mb-[5vw] mt-[1vw] sm:flex-col sm:items-center sm:gap-[1vw]">
                <div className="sm:text-center">
                    <Title body={'Leading companies trust us '} strong={'to develop software'}/>
                    <p className="w-[31vw] mt-[1vw] sm:mt-[3vw] leading-[1.8vw] text-gray-700 text-[1.2vw] sm:w-[80vw] sm:text-[1.5vw]">We <span
                        className="text-pink-700">add development capacity</span> to tech teams. Our value isn’t limited
                        to building teams but is equally distributed across the project lifecycle. We are a custom
                        software development company that guarantees the successful delivery of your project.</p>
                    <div id="caseStudy"
                         className="flex text-purple-700 font-semibold items-center mt-[2vw] cursor-pointer sm:ms-[5vw]">
                        <h2 className="text-[1.5vw]">See more information</h2><FaArrowRight
                        className="text-[0.9vw] ms-[0.5vw] mt-[0.2vw]"/>
                    </div>
                </div>
                <div>
                    <img className="w-[33vw] h-[25vw] rounded-[0.7vw] blur-[0.5px] sm:w-[70vw] sm:h-[43vw] sm:mt-[2vw]"
                         alt='company video'
                         width={1202}
                         height={801}
                         src={`${imageUrl}images/video-image.jpg`}/>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy;