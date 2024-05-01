/**
 * author : Sudeera Madushan
 * date : 3/22/2024
 * project : zenex-web
 */
import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {TestimonialCard} from "../card/testimonialCard";

export const Slider = ({children, options}) => {
    const [index, setIndex] = useState(0);
    const [selID, setSelId] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 1,
        align: 'center',
        loop: true,
        ...options,
    });

    useEffect(() => {
        if (emblaApi) {
            const onScroll = () => {
                setIndex(emblaApi.scrollProgress());
                let val = parseInt("" + (emblaApi.scrollProgress() * 10));
                setSelId(val > 5 ? val - 5 : val)
            };

            emblaApi.on('scroll', onScroll);
            onScroll();

            return () => {
                emblaApi.off('scroll', onScroll);
            };
        }
    }, [emblaApi]);

    const handleIndicatorClick = (slideIndex) => {
        setSelId(slideIndex / 2)
        if (emblaApi) {
            emblaApi.scrollTo(slideIndex);
        }
    };

    const gapSize = 1;
    const duplicatedChildren = [
        ...children.slice(-1),
        ...children,
        ...children.slice(0, 1),
    ];

    return (
        <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex sm:w-[150vw]">
                {duplicatedChildren.map((testimonial, i) => (
                    <React.Fragment key={i}>
                        <TestimonialCard {...testimonial} index={index}/>
                        {i !== duplicatedChildren.length - 1 && <div style={{width: gapSize}}></div>}
                    </React.Fragment>
                ))}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
                {children.map((c, i) => (
                    <div
                        key={i}
                        onClick={() => handleIndicatorClick(c.id * 2)}
                        className={`h-[0.8vw] w-[0.8vw] rounded-full bg-gray-300 ${
                            selID === c.id ? 'bg-gradient-to-t from-purple-800 to-pink-600' : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};