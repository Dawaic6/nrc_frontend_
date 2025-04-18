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
    <div className="w-9/10 mx-auto mt-10 p-4 bg-gray-400 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mx-10 my-8">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold">
            Posts from <span className="text-black">@NRC’s RWANDA</span>
          </h2>
          <FaTwitter className="text-black" size={18} />
        </div>
        <a
          href="https://twitter.com/NursingRClub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-bold py-1 px-3 rounded-md shadow ml-6"
        >
          Follow
        </a>
      </div>

      <div className='flex flex-row items-center justify-center gap-5'>
  <div
    ref={containerRef}
    className="w-[350px] h-[700px] overflow-hidden bg-white rounded-xl shadow p-2"
  >
    <blockquote className="twitter-tweet" data-media-max-width="350">
      <p lang="en" dir="ltr">
        Investing in <a href="https://twitter.com/hashtag/nurses?src=hash&amp;ref_src=twsrc%5Etfw">#nurses</a> &amp; <a href="https://twitter.com/hashtag/midwives?src=hash&amp;ref_src=twsrc%5Etfw">#midwives</a> means investing in healthcare innovation...
        <a href="https://t.co/jYmxB1HTIK">https://t.co/jYmxB1HTIK</a>
      </p>
      &mdash; Nursing Research Club (NRC) (@NursingRClub)
      <a href="https://twitter.com/NursingRClub/status/1908451347969507674?ref_src=twsrc%5Etfw">April 5, 2025</a>
    </blockquote>
  </div>

  <div
    ref={containerRef}
    className="w-[350px] h-[700px] overflow-hidden bg-white rounded-xl shadow p-2"
  >
    <blockquote className="twitter-tweet" data-media-max-width="350">
      <p lang="qht" dir="ltr">
        <a href="https://twitter.com/hashtag/NRCSymposium2025?src=hash&amp;ref_src=twsrc%5Etfw">#NRCSymposium2025</a>
        <a href="https://twitter.com/hashtag/YouthInResearch?src=hash&amp;ref_src=twsrc%5Etfw">#YouthInResearch</a>
        <a href="https://twitter.com/hashtag/ViveNursingProfession?src=hash&amp;ref_src=twsrc%5Etfw">#ViveNursingProfession</a>
        <a href="https://t.co/TeUyIi93wV">https://t.co/TeUyIi93wV</a>
      </p>
      &mdash; Nursing Research Club (NRC) (@NursingRClub)
      <a href="https://twitter.com/NursingRClub/status/1908567931920830501?ref_src=twsrc%5Etfw">April 5, 2025</a>
    </blockquote>
  </div>

  <div
    ref={containerRef}
    className="w-[350px] h-[700px] overflow-hidden bg-white rounded-xl shadow p-2"
  >
    <blockquote className="twitter-tweet" data-media-max-width="350">
      <p lang="en" dir="ltr">
        Joined <a href="https://twitter.com/hashtag/RwamaganaCarFreeDay?src=hash&amp;ref_src=twsrc%5Etfw">#RwamaganaCarFreeDay</a>! ...
        <a href="https://t.co/IvPhOeLUjs">pic.twitter.com/IvPhOeLUjs</a>
      </p>
      &mdash; Nursing Research Club (NRC) (@NursingRClub)
      <a href="https://twitter.com/NursingRClub/status/1903713426439909821?ref_src=twsrc%5Etfw">March 23, 2025</a>
    </blockquote>
  </div>
</div>

    </div>
  );
};

export default TwitterEmbed;
