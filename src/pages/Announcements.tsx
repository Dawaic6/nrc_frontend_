import MainLayout from "../layouts/MainLayout";
import AnnouncementsTab from "../components/Announcements";

const announcementsData = [
  {
    title: 'New Research Event',
    description: 'Join us for a seminar on research ethics.',
    imageUrl: 'https://via.placeholder.com/150',
    pdfUrl: 'https://example.com/doc.pdf',
    link: 'https://example.com/event',
  },
];

const opportunitiesData = [
  {
    title: 'Call for Papers',
    description: 'Submit your research paper by June.',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://example.com/submit',
  },
];
const Announcements = () => {
  return (
    <MainLayout>
      <AnnouncementsTab
      announcements={announcementsData}
      opportunities={opportunitiesData}
    />
    </MainLayout>
  );
};

export default Announcements;
// import AnnouncementsTab from './AnnouncementsTab';



// export default function Dashboard() {
//   return (
   
//   );
// }
