import { useState, useEffect, useRef } from 'react';
import bannerVideo from '../assets/banner.mp4';

const NursingResearchBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Welcome To Nursing Research Club",
      content: "Empowering innovation, Growth, and Collaboration",
      cta: "Join Us Today in Nursing Research",
    },
    {
      title: "Stay informed with our latest news",
      content: "Catch up on the newest updates, achievements, and events Happening at NRC's",
      cta: "Learn More",
    },
    {
      title: "Revolutionizing",
      content: "Discover our groundbreaking research on body, shaping the future of nursing research",
      cta: "Learn More →",
    },
  ];

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const goToPrev = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };

    const bannerElement = bannerRef.current;
    bannerElement?.addEventListener('keydown', handleKeyDown);
    bannerElement?.focus();

    return () => {
      bannerElement?.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
    ref={bannerRef}
    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg focus:outline-none"
    tabIndex={0}
  >
    {/* Video Background */}
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover z-0"
      muted
      autoPlay
      playsInline
      loop
    >
      <source src={bannerVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay to darken slightly for readability */}
    <div className="absolute inset-0 z-10" />

    {/* Slides Content */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 z-20 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
          {slide.content}
        </p>
        <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors">
          {slide.cta}
        </button>
      </div>
    ))}
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all focus:outline-none"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-green-500' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NursingResearchBanner;






// import React, { useState, useEffect, useRef } from 'react';
// import bannerVideo from '../assets/banner.mp4';

// const NursingResearchBanner = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const bannerRef = useRef<HTMLDivElement>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       type: 'text',
//       title: "Welcome To Nursing Research Club",
//       content: "Empowering innovation, Growth, and Collaboration",
//       cta: "Join Us Today in Nursing Research",
//     },
//     {
//       type: 'text',
//       title: "Stay informed with our latest news",
//       content: "Catch up on the newest updates, achievements, and events Happening at NRC's",
//       cta: "Learn More",
//     },
//     {
//       type: 'text',
//       title: "Revolutionizing",
//       content: "Discover our groundbreaking research on body, shaping the future of nursing research",
//       cta: "Learn More →",
//     },
//     {
//       type: 'video',
//       videoSrc: bannerVideo,
//       duration: 70000, // 1 min 10 sec
//       cta: "Watch Our Story",
//     },
//   ];

//   const goToSlide = (index: number) => {
//     if (currentSlide === index || isTransitioning) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   const goToNext = () => goToSlide((currentSlide + 1) % slides.length);
//   const goToPrev = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowRight') goToNext();
//       if (e.key === 'ArrowLeft') goToPrev();
//     };

//     const bannerEl = bannerRef.current;
//     bannerEl?.addEventListener('keydown', handleKeyDown);
//     bannerEl?.focus();

//     return () => bannerEl?.removeEventListener('keydown', handleKeyDown);
//   }, [currentSlide, isTransitioning]);

//   useEffect(() => {
//     let interval: ReturnType<typeof setTimeout>;

//     if (slides[currentSlide].type === 'video') {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0;
//         videoRef.current.play().catch(err => console.error("Auto-play failed:", err));
//       }

//       interval = setTimeout(goToNext, slides[currentSlide].duration);
//     } else {
//       interval = setTimeout(goToNext, 5000);
//     }

//     return () => {
//       clearTimeout(interval);
//       if (videoRef.current) videoRef.current.pause();
//     };
//   }, [currentSlide, slides]);

//   return (
//     <div
//       ref={bannerRef}
//       className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 overflow-hidden rounded-lg shadow-lg focus:outline-none"
//       tabIndex={0}
//     >
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//         >
//           {slide.type === 'text' ? (
//             <>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
//                 {slide.title}
//               </h2>
//               <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
//                 {slide.content}
//               </p>
//               <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors">
//                 {slide.cta}
//               </button>
//             </>
//          ) : (
//           <div className="relative w-full h-full">
//             <video
//               ref={videoRef}
//               className="absolute inset-0 w-full h-full object-cover"
//               muted
//               autoPlay
//               playsInline
//               loop // Optional: Remove if you don't want looping
//             >
//               <source src={slide.videoSrc} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             {/* Title/CTA removed entirely */}
//           </div>
//         )}
//         </div>
//       ))}

//       {/* Arrows */}
//       <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50">
//         ←
//       </button>
//       <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50">
//         →
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? 'bg-green-700' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NursingResearchBanner;
