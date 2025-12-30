"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventCarouselProps {
    title: string;
    description: string;
    folder: string;
    imageCount: number;
}

export default function EventCarousel({ title, description, folder, imageCount }: EventCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const images = Array.from(
        { length: imageCount },
        (_, i) => `/past-events/${folder}/${i + 1}.jpg`
    );

    const getItemWidth = () => {
        if (!carouselRef.current) return 320;
        const item = carouselRef.current.querySelector('.carousel-item') as HTMLElement;
        return item?.offsetWidth || 320;
    };

    const getGap = () => {
        if (typeof window === 'undefined') return 24;
        if (window.innerWidth < 640) return 16; // Mobile
        return 24; // Desktop
    };

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;

        const itemWidth = getItemWidth();
        const gap = getGap();
        const scrollAmount = itemWidth + gap;

        const newIndex = direction === "left"
            ? Math.max(0, currentIndex - 1)
            : Math.min(images.length - 1, currentIndex + 1);

        setCurrentIndex(newIndex);

        carouselRef.current.scrollTo({
            left: newIndex * scrollAmount,
            behavior: "smooth",
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                // Swiped left
                scroll("right");
            } else {
                // Swiped right
                scroll("left");
            }
            setIsAutoPlaying(false);
        }
        
        setTouchStart(0);
        setTouchEnd(0);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const next = (prev + 1) % images.length;
                if (carouselRef.current) {
                    const itemWidth = getItemWidth();
                    const gap = getGap();
                    carouselRef.current.scrollTo({
                        left: next * (itemWidth + gap),
                        behavior: "smooth",
                    });
                }
                return next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    return (
        <div className="mx-auto relative max-w-[1400px] z-10 px-2 md:px-8 lg:px-12">
            {/* EVENT HEADER */}
            <div className="mb-6 sm:mb-8 text-center px-2 md:px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-2 sm:mb-3">
                    {title}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="relative group px-0 md:px-4 lg:px-12">
                {/* LEFT BUTTON - Hidden on mobile, shown on larger screens */}
                <button
                    onClick={() => {
                        scroll("left");
                        setIsAutoPlaying(false);
                    }}
                    disabled={currentIndex === 0}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20
                    bg-black/60 backdrop-blur-md border-2 border-yellow-400/50
                    text-yellow-300 w-10 h-10 sm:w-14 sm:h-14 rounded-full
                    hover:bg-yellow-500/30 hover:border-yellow-400 hover:scale-110
                    disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
                    transition-all duration-300 shadow-xl shadow-yellow-500/20
                    hidden sm:flex items-center justify-center
                    sm:opacity-0 sm:group-hover:opacity-100"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* RIGHT BUTTON - Hidden on mobile, shown on larger screens */}
                <button
                    onClick={() => {
                        scroll("right");
                        setIsAutoPlaying(false);
                    }}
                    disabled={currentIndex === images.length - 1}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20
                    bg-black/60 backdrop-blur-md border-2 border-yellow-400/50
                    text-yellow-300 w-10 h-10 sm:w-14 sm:h-14 rounded-full
                    hover:bg-yellow-500/30 hover:border-yellow-400 hover:scale-110
                    disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
                    transition-all duration-300 shadow-xl shadow-yellow-500/20
                    hidden sm:flex items-center justify-center
                    sm:opacity-0 sm:group-hover:opacity-100"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* CAROUSEL */}
                <div
                    ref={carouselRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 scroll-smooth no-scrollbar snap-x snap-mandatory"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="carousel-item relative flex-shrink-0 snap-center
                            w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)] lg:w-[900px] xl:w-[1100px]
                            h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
                            rounded-2xl sm:rounded-3xl overflow-hidden
                            border-2 border-yellow-500/30
                            hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/30
                            sm:transform sm:hover:scale-[1.02]
                            transition-all duration-500 cursor-pointer
                            bg-gradient-to-br from-gray-800 to-gray-900"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
                            <img
                                src={src}
                                alt={`${title} image ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* PROGRESS INDICATORS */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrentIndex(i);
                                setIsAutoPlaying(false);
                                if (carouselRef.current) {
                                    const itemWidth = getItemWidth();
                                    const gap = getGap();
                                    carouselRef.current.scrollTo({
                                        left: i * (itemWidth + gap),
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                    ? 'w-8 sm:w-12 bg-yellow-400 shadow-lg shadow-yellow-400/50'
                                    : 'w-1.5 sm:w-2 bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
