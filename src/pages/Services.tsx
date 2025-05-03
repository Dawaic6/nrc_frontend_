import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ncds from '../assets/ncds.jpg';
import srh from '../assets/srh.jpg';
import mentalHealth from '../assets/mental healthy.jpg';
import child from '../assets/childhealthy.jpg';
import pandemic from '../assets/pandemic.jpg';
import innovation from '../assets/innovation.jpg';
import research from '../assets/research.jpg';
import projectwriting from '../assets/projectwritting.jpg';
import abstract from '../assets/abstract.jpg';
import peer from '../assets/peer to peer.jpg';
import mentor from '../assets/mentor mentee.jpg';

const sections = [
  {
    title: 'Community Awareness',
    items: [
      {
        name: 'NCDs Screening',
        image: srh,
        description:
          'Implementing regular screening programs for non-communicable diseases is crucial for early detection and management. Community workshops and outreach initiatives educate individuals on the importance of screening and provide access to necessary health services.',
      },
      {
        name: 'Sexual and Reproductive Health (SRH) Education',
        image: ncds,
        description:
          'Empowering communities with knowledge on sexual health, family planning, and reproductive rights, especially among youth and women.',
      },
      {
        name: 'Mental Health',
        image: mentalHealth,
        description:
          'Raising awareness about mental health is vital for reducing stigma and encouraging individuals to seek help. Our initiatives include community seminars, support groups, and resources to promote mental well-being.',
      },
      {
        name: 'Maternal and Child Health',
        image: child,
        description:
          'Enhancing maternal and child health services is a priority. We will provide education on prenatal and postnatal care, nutrition, and child development, ensuring that families have the support they need for healthy growth.',
      },
      {
        name: 'Communicable Diseases and Pandemic Preparedness',
        image: pandemic,
        description:
          'In light of recent global health challenges, we will focus on educating communities about communicable diseases and the importance of pandemic preparedness. This includes vaccination campaigns, hygiene practices, and emergency response training.',
      },
    ],
  },
  {
    title: 'Research and Innovation',
    items: [
      {
        name: 'Innovative Projects',
        image: innovation,
        description:
          'We encourage the development of innovative health projects that address community needs. By fostering creativity and collaboration, we aim to implement solutions that improve health outcomes.',
      },
      {
        name: 'Research Fellowships',
        image: research,
        description:
          'Establishing a research fellowship program provide opportunities for emerging researchers to gain experience and contribute to impactful health studies. This program will support their professional growth and enhance research capacity in the community.',
      },
      {
        name: 'Research Project Writing',
        image: projectwriting,
        description:
          'We offer workshops on research project writing to equip individuals with the skills needed to develop and submit successful grant proposals. This initiative will promote research initiatives that align with community health priorities.',
      },
    ],
  },
  {
    title: 'Mentorship Wing',
    items: [
      {
        name: 'Abstract Review',
        image: abstract,
        description:
          'Our mentorship wing includes a structured abstract review process, allowing mentees to receive constructive feedback on their research proposals and academic papers.',
      },
      {
        name: 'Peer-to-Peer Mentorship',
        image: peer,
        description:
          'Encouraging peer-to-peer mentorship will foster a collaborative environment where individuals can share knowledge, experiences, and support each other in their professional journeys.',
      },
      {
        name: 'Mentor-Mentee Program',
        image: mentor,
        description:
          'We established a formal mentor-mentee program that pairs experienced professionals with emerging leaders in the health sector. This program provides guidance, resources, and networking opportunities to help mentees thrive.',
      },
    ],
  },
];

const ServiceItem = ({
  name,
  description,
  image,
  layout = 'vertical',
}: {
  name: string;
  description: string;
  image: string;
  layout?: 'vertical' | 'horizontal';
}) => {
  const [show, setShow] = useState(true); 

  return layout === 'horizontal' ? (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all duration-300">
      <img src={image} alt={name} className="w-full md:w-1/2 h-auto rounded-md object-cover" />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <button
          onClick={() => setShow(!show)}
          className="text-blue-600 text-sm font-medium underline hover:text-blue-800 mt-2"
        >
          {show ? 'Show less' : 'Learn more'}
        </button>
        {show && <p className="text-gray-700 mt-4">{description}</p>}
      </div>
    </div>
  ) : (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <img src={image} alt={name} className="mt-4 rounded-md w-full h-auto object-cover" />
      <button
        onClick={() => setShow(!show)}
        className="text-blue-600 text-sm font-medium underline hover:text-blue-800 mt-2"
      >
        {show ? 'Show less' : 'Learn more'}
      </button>
      {show && <p className="text-gray-700 mt-4">{description}</p>}
    </div>
  );
};

const Services = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        {sections.map((section, idx) => (
          <section key={idx} id={section.title.replace(/\s+/g, '').toLowerCase()}>
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
            </div>

            {/* Section Items */}
            <div className="flex flex-col gap-8">
              {section.items.map((item, i) => (
                <ServiceItem
                  key={i}
                  {...item}
                  layout={i % 2 === 0 ? 'vertical' : 'horizontal'}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </MainLayout>
  );
};

export default Services;
