// import React from 'react';
// import Image from '../assets/banner.mp4'; // If using Next.js, or use <img> otherwise
// import officeImage from '../assets/office.jpg'; // Replace with correct path
// import MainLayout from '../layouts/MainLayout';

// const About = () => {
//   return (
//     <MainLayout>
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Introduction Section */}
//       <section id='Background' className="mb-20">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900">Introduction</h1>
//         </div>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div>
//             <img src="/office.jpg" alt="Office" className="rounded-lg shadow-md" />
//             {/* If using Next.js Image component:
//             <Image src={officeImage} alt="Office" className="rounded-lg shadow-md" />
//             */}
//           </div>

//           {/* Text */}
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Background of NRC’s</h2>
//             <p className="text-gray-600">
//               With a clear vision of creating a sustainable and progressive future, we focus on delivering
//               innovative solutions that address real-world problems. Through our dedication, we aim to inspire
//               positive change and empower communities around the world.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Nursing Research Club */}
//       <section  className="mb-20">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nursing Research Club</h2>
//           <p className="text-gray-600">
//             We are committed to driving innovation and making a meaningful impact through groundbreaking research
//             and collaboration. Our team of experts works together to explore new ideas, solve complex challenges,
//             and contribute to advancement of Nursing research.
//           </p>
//         </div>
//       </section>

//       {/* Our Strength */}
//       <section className="mb-20">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Strength</h1>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { title: "Local Knowledge" },
//             { title: "Integrated Approach" },
//             { title: "Tech-enabled Research" },
//             { title: "Dignity First" }
//           ].map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
//               <h2 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h2>
//               <p className="text-gray-600">
//                 To advance knowledge and provide innovative solutions through groundbreaking research that addresses real-world challenges.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Where We Work */}
//       <section className="mb-20">
//         <div className="bg-blue-50 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where We Work</h2>
//           <p className="text-gray-600 mb-4">
//             We do research in the nursing field in Rwanda. Our office is located in Kigali City Tower, Kigali, Rwanda.
//           </p>
//           <div className="bg-white inline-block px-4 py-2 rounded-full shadow-sm">
//             <span className="text-blue-600 font-medium">Nursing Research</span>
//           </div>
//         </div>
//       </section>

//       {/* Our Clients and Partners */}
//       <section>
//         <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Clients and Partners</h1>
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center h-20 bg-gray-100 rounded-lg"
//               >
//                 <span className="text-gray-400">logo</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section id='ourVision' className="py-16 bg-gray-50">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Section Heading */}
//     <div className="text-center mb-16">
//       <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our  Vision</h2>
//     </div>

//     {/* Making an impact */}
//     <div className="bg-gray-100 rounded-xl p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center gap-6 shadow-md">
//       {/* Image */}
//       <img
//         src="/impact.jpg"
//         alt="Research"
//         className="w-full md:w-1/2 h-auto rounded-md object-cover"
//       />
//       {/* Text */}
//       <div className="md:w-1/2 space-y-2">
//         <h3 className="text-sm text-gray-600">Our  Vision</h3>
//         <h2 className="text-xl font-bold text-gray-900">Making an impact</h2>
//         <p className="text-gray-700">
//           To be a global leader in research, fostering innovation and driving
//           progress for a sustainable future.
//         </p>
//       </div>
//     </div>

//     {/* Transforming Research */}
//     <div className="bg-gray-100 rounded-xl p-6 md:p-10 flex flex-col md:flex-row-reverse items-center gap-6 shadow-md">
//       {/* Image */}
//       <img
//         src="/desk.jpg"
//         alt="Desk"
//         className="w-full md:w-1/2 h-auto rounded-md object-cover"
//       />
//       {/* Text */}
//       <div className="md:w-1/2 space-y-2">
//         <h3 className="text-sm text-gray-600">What Drives Us</h3>
//         <h2 className="text-xl font-bold text-gray-900">Transforming  Research</h2>
//         <p className="text-gray-700">
//           With a clear vision of creating a sustainable and progressive future,
//           we focus on delivering innovative solutions that address real-world
//           problems. Through our dedication, we aim to inspire positive change and
//           empower communities around the world.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
// <section id='ourMission' className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Our Mission
//           </h2>
//           <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Mission Statement */}
//           <div className="bg-blue-50 p-8 rounded-xl shadow-md">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-blue-800 mb-2">Nursing Research Club</h3>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 To advance knowledge and provide innovative solutions through groundbreaking
//                 research that addresses real-world challenges.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-blue-700 mb-3">Introducing Nursing Research Club</h4>
//               <p className="text-gray-600">
//                 We are committed to driving innovation and making a meaningful impact through
//                 groundbreaking research and collaboration.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Expanded Mission */}
//           <div className="space-y-6">
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <p className="text-gray-700 leading-relaxed">
//                 Our team of experts works together to explore new ideas, solve complex challenges, 
//                 and contribute to advancement of Nursing research through interdisciplinary 
//                 collaboration and evidence-based practice.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <p className="text-gray-700 leading-relaxed">
//                 We foster a culture of continuous learning and innovation, bridging the gap between
//                 academic research and clinical application to improve patient outcomes and transform
//                 healthcare delivery systems.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <p className="text-gray-700 leading-relaxed">
//                 Through strategic partnerships and community engagement, we empower nurses and 
//                 healthcare professionals with the knowledge and tools to implement research findings
//                 in real-world clinical settings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//     </MainLayout>
//   );
// };

// export default About;




import React from 'react';
import MainLayout from '../layouts/MainLayout';
import officeImage from '../assets/IMG-20250228-WA0012.jpg'; // Update this path as needed
import backgroundImage from '../assets/IMG-20250228-WA0014.jpg'; // Update this path as needed


const About = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section id="Background">
        <section id="Background" className="mb-20">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Introduction</h1>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <img src={officeImage} alt="Office" className="rounded-lg shadow-md h-80 w-140 " />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
              The Nursing Research Club (NRC) represents an independent, non-governmental, and non-political consortium
               comprising aspiring nurses and midwives studying in Rwanda. Established within the University of Rwanda, 
               this organization operates as a not-for-profit entity and holds official recognition from the university.
                NRC's stature is further cemented by its acknowledgment by the School of Nurses and Midwives, coupled with 
                steadfast support from the dean's office. Additionally, it carries esteemed recognition from the Rwanda
                 Nurses and Midwives Union (RNMU), highlighting its active involvement of nurses and midwives in research
                  endeavors spanning diverse health issues.


              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4"> NRC</h2> */}
            <p className="text-gray-700 leading-relaxed">
            Functioning under the umbrella of the University of Rwanda Students Union (URSU), NRC efficiently manages
                  its initiatives through two pivotal departments:    
           <b> the Department of Research and Innovation and the Department of Awareness and Community Engagement.</b>
 These departments oversee and coordinate all activities within the club, ensuring a streamlined and impactful approach 
 to their endeavors. All initiatives, projects, and activities undergo comprehensive evaluation via the club's dedicated 
 evaluation board, ensuring adherence to high standards of research and innovation.
NRC's membership structure thrives on inclusivity, boasting a robust and dedicated community of over two thousand members.
 These members undergo a meticulous registration process, solidifying their commitment to contributing actively and substantially
  to evidence-based interventions aimed at addressing an array of health-related concerns. NRC serves as a nurturing platform for 
  aspiring healthcare professionals, fostering an environment that encourages research-driven practices 
  and the pursuit of innovative solutions in healthcare."

            </p>
          </div>
        </section>
        </section>
                {/* Background  Section */}
                <section id="Background">
        <section id="Background" className="mb-20">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Background</h1>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={backgroundImage} alt="Office" className="rounded-lg shadow-md h-80 w-140 " />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
              The inception of the Nursing Research Club (NRC) was driven by a
               core objective: to elevate health research endeavors among undergraduate,
                graduate, and post-graduate nurses and midwives in Rwanda. At its core,
                 NRC is dedicated to conducting evidence-based research and interventions
                  that address multifaceted health issues. With a vibrant community of over
                   two thousand active members, who have undergone a rigorous membership process, 
                   and over two hundred actively engaged in research through our NRC Mentorship Wing,
                    NRC stands as a beacon of collaborative research in the nursing-midwifery profession.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
           
            <p className="text-gray-700 leading-relaxed">
            NRC's initiatives extend beyond the confines of traditional research,
             encompassing diverse community outreach programs, rigorous research pursuits,
              discussions, symposiums, and activities aimed at promoting evidence-based practices 
              not only within the nursing-midwifery profession but also within the broader healthcare 
              domain. Furthermore, NRC actively involves interdisciplinary junior researchers,
               nurturing their research capabilities, and fostering innovative solutions to address prevailing health challenges.
            </p>
          </div>
        </section>
        </section>

        {/* Vision Section */}
        <section id="ourVision" className="py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Vision</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              We seek to improve the quality of community health through research, innovation, and evidence-based practices in nursing.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="ourMission" className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              To promote health research in the nursing profession, represent the nursing field in the community, and implement research-based activities to sustain public health.
            </p>
          </div>
        </section>

        {/* Goals and Objectives */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Goals & Objectives</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'To improve health research in the nursing profession.',
              'To enhance quality of care through nursing research and innovation.',
              'To conduct community engagement based on research.',
              'To increase recognition of the nursing profession.',
              'To collaborate with national and international health-related organizations.',
            ].map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Clients and Partners */}
        {/* <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Clients and Partners</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-20 bg-gray-100 rounded-lg"
                >
                  <span className="text-gray-400">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
};

export default About;
