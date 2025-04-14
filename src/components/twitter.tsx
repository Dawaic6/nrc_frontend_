// import { useEffect } from "react";
// import { FaTwitter } from "react-icons/fa";

// const TwitterEmbed = () => {
//   useEffect(() => {
//     // Load Twitter script
//     const script = document.createElement("script");
//     script.src = "https://platform.twitter.com/widgets.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up script if needed
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-200 p-6 rounded-2xl max-w-2xl mx-auto border border-black">
    //   {/* Header Section */}
    //   <div className="flex items-center justify-between mb-4">
    //     <div className="flex items-center space-x-2">
    //       <h2 className="text-lg font-bold">
    //         Posts from <span className="text-black">@NRC’s RWANDA</span>
    //       </h2>
    //       <FaTwitter className="text-black" size={18} />
    //     </div>

    //     <a
    //       href="https://twitter.com/IGIHE"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-black text-green-400 font-bold py-1 px-3 rounded-md shadow ml-8"
    //     >
    //       Follow
    //     </a>
    //   </div>

//       {/* Twitter Embed */}
//       <blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Révélant la face sombre de Jean Marie Vianney Ndagijimana, ancien diplomate rwandais reconverti en &quot; militant des droits humains &quot;, le ministre de l’Unité nationale et de l’Engagement civique, Dr Jean-Damascène Bizimana, a mis en lumière ses antécédents de détournement de fonds… 
//         <a href="https://t.co/575OD4OzFy">pic.twitter.com/575OD4OzFy</a></p>&mdash; IGIHE (@IGIHE) 
//         <a href="https://twitter.com/IGIHE/status/1911513847544107115?ref_src=twsrc%5Etfw">April 13, 2025</a></blockquote> 
//         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//     </div>
//   );
// };

// export default TwitterEmbed;


import React, { useEffect, useRef } from 'react';
import { FaTwitter } from 'react-icons/fa'; // Twitter icon

const TwitterEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter embed script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    script.setAttribute('charset', 'utf-8');
    containerRef.current?.appendChild(script);
  }, []);

  return (
    <div className="w-9/10  mx-auto mt-10 p-4 bg-gray-400 rounded-lg shadow-lg">
              {/* Header Section */}
      <div className="flex items-center justify-between mx-10 my-8">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold">
            Posts from <span className="text-black">@NRC’s RWANDA</span>
          </h2>
          <FaTwitter className="text-black " size={18} />
        </div>

        <a
          href="https://twitter.com/IGIHE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-bold py-1 px-3 rounded-md shadow ml-6"
        >
          Follow
        </a>
      </div>
      <div className='flex flex-row items-center justify-center gap-5'>
      <div ref={containerRef}>
        <blockquote className="twitter-tweet">
          <p lang="fr" dir="ltr">
            Révélant la face sombre de Jean Marie Vianney Ndagijimana, ancien diplomate rwandais reconverti en &quot; militant des droits humains &quot;, le ministre de l’Unité nationale et de l’Engagement civique, Dr Jean-Damascène Bizimana, a mis en lumière ses antécédents de détournement de fonds… 
            <a href="https://t.co/575OD4OzFy">pic.twitter.com/575OD4OzFy</a>
          </p>
          &mdash; IGIHE (@IGIHE) 
          <a href="https://twitter.com/IGIHE/status/1911513847544107115?ref_src=twsrc%5Etfw">April 13, 2025</a>
        </blockquote>
      </div>

      <div ref={containerRef}>
        <blockquote className="twitter-tweet">
          <p lang="fr" dir="ltr">
            Révélant la face sombre de Jean Marie Vianney Ndagijimana, ancien diplomate rwandais reconverti en &quot; militant des droits humains &quot;, le ministre de l’Unité nationale et de l’Engagement civique, Dr Jean-Damascène Bizimana, a mis en lumière ses antécédents de détournement de fonds… 
            <a href="https://t.co/575OD4OzFy">pic.twitter.com/575OD4OzFy</a>
          </p>
          &mdash; IGIHE (@IGIHE) 
          <a href="https://twitter.com/IGIHE/status/1911513847544107115?ref_src=twsrc%5Etfw">April 13, 2025</a>
        </blockquote>
      </div>
      </div>

      {/* Twitter Icon at the bottom
      <div className="mt-6 flex justify-end text-blue-500">
        <a
          href="https://twitter.com/IGIHE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition"
        >
          <FaTwitter className="text-xl" />
          <span className="hidden sm:inline">Follow @IGIHE</span>
        </a>
      </div> */}
    </div>
  );
};

export default TwitterEmbed;
