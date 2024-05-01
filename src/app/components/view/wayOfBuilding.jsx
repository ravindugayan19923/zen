import React from 'react';
import GradientLine from "../../components/ui/other/gradientLine/gradientLine";
import Title from "../../components/ui/other/title/title";
export const imageUrl = process.env.IMAGE_URL;
const WayOfBuilding = () => {
    return (
        <div className={'flex items-center flex-col px-[4vw] py-[2vw] sm:py-[4vw]'}>
            <GradientLine classNames={' mb-[1vw]'}/>
            <Title body={'Way of building'} strong={'Great Software'} classNames={'text-center'}/>
            <div className={"flex flex-col rounded-[1vw] p-[2vw] mt-[3vw] px-[8vw] sm:text-white "}>
                <div className={"flex mb-[3vw] gap-[5vw]  sm:px-[5vw]  sm:text-center"} data-aos="fade-up">
                    <div className={"text-[1.2vw] leading-[1.9vw] my-[1.7vw] w-full sm:absolute sm:z-10 sm:w-[47vw] sm:m-[11vw]  sm:text-[1.6vw]  sm:leading-[2vw]" }>
                        <p className={"text-[1.6vw] font-bold text-gray-800 sm:text-white sm:text-[3vw]"}>Build the right team to scale</p>
                        <p className={"my-[1vw] sm:my-[2vw]"}>Finding the right talent is not easy. We help you find the talent that
                            suits your needs, follows your processes, and sticks with you long term (not the case with
                            freelancers</p>
                        <p>Our delivery model helps you cut costs and deliver within budget.</p>
                        <div className={"flex py-[2vw]"}>
                            <div className={"bg-gradient-to-t from-purple-800 to-pink-500  w-[0.2vw] mr-[1vw] "}></div>
                            <p className={"bg-gradient-to-tr from-purple-700 to-pink-400 bg-clip-text text-transparent  w-10/12 sm:from-purple-200 sm:to-pink-200"}>
                                <i>{"\"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules\""}</i>
                            </p>
                        </div>
                        <div className={" flex sm:justify-center"}>
                            <img
                                className={"rounded-full w-[2.9vw]"}
                                width={40}
                                height={40}
                                src={`${imageUrl}images/jeewa-markran.png`}
                                alt={"jeewaMarkram.png"}
                            />
                            <div className={"text-[1vw] ms-[0.5vw] leading-[1.5vw]"}>
                                <p className={"font-semibold"}>Jeewa markram</p>
                                <p className={"text-gray-500 sm:text-white"}>CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"bg-gradient-to-tr to-[#FFEF5E] from-[#F7936F] rounded-full w-[4.5vw] h-[4.5vw] absolute z-0 mr-14"}></div>
                        <img
                            className={"rounded-[0.7vw] m-[1.7vw] relative  w-[80vw] h-[28vw] sm:h-[40vw] z-0 sm:brightness-[0.4]"}
                            width={500}
                            height={500}
                            src={`${imageUrl}images/meeting-image.jpg`}
                            alt={"meetingImage.png"}
                        />
                    </div>
                </div>
                <div className={"flex flex-row-reverse gap-[5vw] mb-[4vw]  sm:ps-[6vw] sm:pe-[2.5vw]  sm:text-center"}>
                    <div className={"text-[1.2vw] leading-[1.9vw] my-[0.75vw] w-full sm:absolute sm:z-10 sm:w-[47vw] sm:mx-[8vw] sm:mt-[2vw]  sm:text-[1.6vw]  sm:leading-[2vw]"}>
                        <p className={"text-[1.6vw] font-bold text-gray-800  sm:text-white sm:text-[3vw] sm:leading-[3.5vw]"}>Enhance Development Workflow Efficiency</p>
                        <p className={"my-[1vw] sm:my-[2vw]"}>Optimizing your development workflow is crucial for timely and successful project delivery. We streamline your processes, integrate cutting-edge tools, and implement best practices to maximize efficiency.</p>
                        <p>Our delivery model helps you cut costs and deliver within budget.</p>
                        <div className={"flex py-[2vw]"}>
                            <div className={"bg-gradient-to-t from-purple-800 to-pink-500  w-[0.2vw] mr-[1vw]"}></div>
                            <p className={"bg-gradient-to-tr from-purple-700 to-pink-400 bg-clip-text text-transparent  w-10/12 sm:from-purple-200 sm:to-pink-200"}>
                                <i>{"\"Our productivity soared after implementing Simform's workflow enhancements. Deadlines became more manageable, and our team's collaboration improved significantly.\""}</i>
                            </p>
                        </div>
                        <div className={" flex  sm:justify-center"}>
                            <img
                                className={"rounded-full  w-[2.9vw] h-[2.9vw]"}
                                width={40}
                                height={40}
                                src={`${imageUrl}images/elena-petrova.png`}
                                alt={"jeewaMarkram.png"}
                            />
                            <div className={"text-[1vw] ms-[0.5vw] leading-[1.5vw]"}>
                                <p className={"font-semibold"}>Elena Petrova</p>
                                <p className={"text-gray-500 sm:text-white"}>CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex justify-end"}>
                        <div
                            className={"bg-gradient-to-tr to-[#F76680] from-[#57007B] rounded-full w-[2vw] h-[2vw] absolute z-0 "}></div>
                        <img
                            className={"rounded-[0.7vw]  m-[0.75vw] relative z-10 w-[80vw] h-[28vw] sm:h-[40vw] sm:z-0 sm:brightness-[0.4]"}
                            width={500}
                            height={500}
                            src={`${imageUrl}images/men-working.jpg`}
                            alt={"meetingImage.png"}
                        />
                        <div
                            className={"bg-gradient-to-tr to-[#FFEF5E] from-[#F7936F] rounded-full w-[4.5vw] h-[4.5vw] absolute z-0 mt-[26vw] mr-[24vw] sm:mt-[38vw] sm:z-[-1]"}></div>
                    </div>
                </div>
                <div className={"flex mb-[1vw] gap-[5vw]  sm:px-[5vw]  sm:text-center"}>
                    <div className={"text-[1.2vw] leading-[1.9vw] my-[0.7vw] w-full sm:absolute sm:z-10 sm:w-[47vw] sm:m-[11vw] sm:mt-[3vw] sm:text-[1.6vw]  sm:leading-[2vw]"}>
                        <p className={"text-[1.6vw] font-bold text-gray-800  sm:text-white sm:text-[3vw] sm:leading-[3.5vw]"}>Ensure Seamless Integration and Scalability</p>
                        <p className={"my-[1vw] sm:my-[2vw]"}>We specialize in crafting solutions that seamlessly integrate with your existing systems and are designed to scale effortlessly as your business expands.</p>
                        <p>Our delivery model helps you cut costs and deliver within budget.</p>
                        <div className={"flex py-[2vw]"}>
                            <div className={"bg-gradient-to-t from-purple-800 to-pink-500  w-[0.2vw] mr-[1vw]"}></div>
                            <p className={"bg-gradient-to-tr from-purple-700 to-pink-400 bg-clip-text text-transparent  w-10/12 sm:from-purple-200 sm:to-pink-200"}>
                                <i>{"\"Simform's expertise in integration and scalability ensured our software seamlessly adapted to our evolving needs. Their solutions laid a solid foundation for our future growth.\""}</i>
                            </p>
                        </div>
                        <div className={"sm:justify-center flex"}>
                            <img
                                className={"rounded-full  w-[2.9vw]  h-[2.9vw]"}
                                width={40}
                                height={40}
                                src={`${imageUrl}images/ravi-patel.png`}
                                alt={"jeewaMarkram.png"}
                            />
                            <div className={"text-[1vw] ms-[0.5vw] leading-[1.5vw]"}>
                                <p className={"font-semibold"}>Ravi Patel</p>
                                <p className={"text-gray-500 sm:text-white"}>VP of Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className={""}>

                        <div
                            className={"bg-gradient-to-tr to-[#F76680] from-[#57007B] rounded-full w-[2vw] h-[2vw] absolute z-0 ms-[20vw]"}></div>
                        <img
                            className={"rounded-[0.7vw] ms-[1.7vw] z-10 m-[1vw] relative h-[28vw] w-[80vw] sm:h-[40vw] sm:z-0 sm:brightness-[0.5]"}
                            width={500}
                            height={500}
                            src={`${imageUrl}images/company-meeting.jpg`}
                            alt={"meetingImage.png"}
                        />
                        <div
                            className={"bg-gradient-to-tr to-[#FFEF5E] from-[#F7936F] rounded-full w-[2.5vw] h-[2.5vw] relative z-[-1] mt-[-2.7vw] ms-[0.8vw]"}></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WayOfBuilding;