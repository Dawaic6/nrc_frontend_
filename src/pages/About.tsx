



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
