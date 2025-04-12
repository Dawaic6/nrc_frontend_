import React, { useState, useEffect, useRef } from 'react';
import bannerVideo from '../assets/banner.mp4'; // Ensure this path is correct

const NursingResearchBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      type: 'text',
      title: "Welcome To Nursing Research Club",
      content: "Empowering innovation, Growth, and Collaboration",
      cta: "Join Us Today in Nursing Research",
    },
    {
      type: 'text',
      title: "Stay informed with our latest news",
      content: "Catch up on the newest updates, achievements, and events Happening at NRC's",
      cta: "Learn More",
    },
    {
      type: 'text',
      title: "Revolutionizing",
      content: "Discover our groundbreaking research on body, shaping the future of nursing research",
      cta: "Learn More →",
    },
    {
      type: 'video',
      title: "Our Research in Action",
      videoSrc: bannerVideo,
      duration: 70000, // 1 minute 10 seconds in milliseconds
      cta: "Watch Our Story",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle slide navigation
  const goToSlide = (index: number) => {
    if (currentSlide === index || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  // Handle next/previous navigation
  const goToNext = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const goToPrev = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    const bannerElement = bannerRef.current;
    bannerElement?.addEventListener('keydown', handleKeyDown);

    // Focus the banner for keyboard accessibility
    bannerElement?.focus();

    return () => {
      bannerElement?.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, isTransitioning]);

  // Auto-rotation logic
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    let videoTimeout: ReturnType<typeof setTimeout>;

    const startNextSlide = () => {
      goToNext();
    };

    if (slides[currentSlide].type === 'video' && !isTransitioning) {
      // Play video and set timeout for video duration
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play()
          .then(() => setIsVideoPlaying(true))
          .catch(e => console.error("Video play error:", e));
      }

      videoTimeout = setTimeout(() => {
        startNextSlide();
      }, slides[currentSlide].duration);
    } else if (!isTransitioning) {
      // Regular text slide with 5 second interval
      interval = setInterval(() => {
        startNextSlide();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(videoTimeout);
      if (videoRef.current) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    };
  }, [currentSlide, isTransitioning, slides.length]);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 overflow-hidden rounded-lg shadow-lg focus:outline-none"
      tabIndex={0} // Make the banner focusable for keyboard navigation
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {slide.type === 'text' ? (
            <>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
                {slide.content}
              </p>
              <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors">
                {slide.cta}
              </button>
            </>
          ) : (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop={false}
                playsInline
              >
                <source src={slide.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <button
                  className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                  onClick={() => {
                    if (videoRef.current) {
                      if (isVideoPlaying) {
                        videoRef.current.pause();
                        setIsVideoPlaying(false);
                      } else {
                        videoRef.current.play();
                        setIsVideoPlaying(true);
                      }
                    }
                  }}
                >
                  {isVideoPlaying ? 'Pause' : slide.cta}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all focus:outline-none focus:ring-2 focus:ring-green-600"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all focus:outline-none focus:ring-2 focus:ring-green-600"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-green-700' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NursingResearchBanner;