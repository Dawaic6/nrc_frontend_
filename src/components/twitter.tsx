import React, { useEffect, useRef } from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    script.setAttribute('charset', 'utf-8');
    containerRef.current?.appendChild(script);
  }, []);

  return (
    <div className="w-full mx-auto mt-10 p-4 bg-gray-400 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-10 my-4 md:my-8 gap-3">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">
            Posts from <span className="text-black">@NRC’s RWANDA</span>
          </h2>
          <FaTwitter className="text-black" size={18} />
        </div>
        <a
          href="https://twitter.com/NursingRClub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-bold py-1 px-3 rounded-md shadow"
        >
          Follow
        </a>
      </div>

      {/* Tweets Container */}
      <div className="flex flex-wrap justify-center gap-5">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            ref={containerRef}
            className="w-full sm:w-[90%] md:w-[350px] h-[700px] overflow-hidden bg-white rounded-xl shadow p-2"
          >
            <blockquote className="twitter-tweet" data-media-max-width="350">
              {index === 0 && (
                <>
                  <p lang="en" dir="ltr">
                    Investing in <a href="https://twitter.com/hashtag/nurses?src=hash&amp;ref_src=twsrc%5Etfw">#nurses</a> &amp; <a href="https://twitter.com/hashtag/midwives?src=hash&amp;ref_src=twsrc%5Etfw">#midwives</a> means investing in healthcare innovation...
                    <a href="https://t.co/jYmxB1HTIK">https://t.co/jYmxB1HTIK</a>
                  </p>
                  — Nursing Research Club (NRC) (@NursingRClub)
                  <a href="https://twitter.com/NursingRClub/status/1908451347969507674?ref_src=twsrc%5Etfw">April 5, 2025</a>
                </>
              )}
              {index === 1 && (
                <>
                  <p lang="qht" dir="ltr">
                    <a href="https://twitter.com/hashtag/NRCSymposium2025?src=hash&amp;ref_src=twsrc%5Etfw">#NRCSymposium2025</a>
                    <a href="https://twitter.com/hashtag/YouthInResearch?src=hash&amp;ref_src=twsrc%5Etfw">#YouthInResearch</a>
                    <a href="https://twitter.com/hashtag/ViveNursingProfession?src=hash&amp;ref_src=twsrc%5Etfw">#ViveNursingProfession</a>
                    <a href="https://t.co/TeUyIi93wV">https://t.co/TeUyIi93wV</a>
                  </p>
                  — Nursing Research Club (NRC) (@NursingRClub)
                  <a href="https://twitter.com/NursingRClub/status/1908567931920830501?ref_src=twsrc%5Etfw">April 5, 2025</a>
                </>
              )}
              {index === 2 && (
                <>
                  <p lang="en" dir="ltr">
                    Joined <a href="https://twitter.com/hashtag/RwamaganaCarFreeDay?src=hash&amp;ref_src=twsrc%5Etfw">#RwamaganaCarFreeDay</a>! ...
                    <a href="https://t.co/IvPhOeLUjs">pic.twitter.com/IvPhOeLUjs</a>
                  </p>
                  — Nursing Research Club (NRC) (@NursingRClub)
                  <a href="https://twitter.com/NursingRClub/status/1903713426439909821?ref_src=twsrc%5Etfw">March 23, 2025</a>
                </>
              )}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterEmbed;
