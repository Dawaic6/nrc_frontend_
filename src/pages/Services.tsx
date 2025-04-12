import MainLayout from "../layouts/MainLayout";

const Services = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Our Services</h1>
      <section id="ncdsScreening" className="mb-20">
    <h2 className="text-2xl font-bold">NCDs Screening</h2>
    <p>Details about NCDs Screening...</p>
</section>

<section id="srhEducation" className="mb-20">
    <h2 className="text-2xl font-bold">SRH Education</h2>
    <p>Details about SRH Education...</p>
</section>

<section id="mentalHealthEducation" className="mb-20">
    <h2 className="text-2xl font-bold">Mental Health Education</h2>
    <p>Details about Mental Health Education...</p>
</section>

<section id="innovativeProjects" className="mb-20">
    <h2 className="text-2xl font-bold">Innovative Projects</h2>
    <p>Details about Innovative Projects...</p>
</section>

<section id="researchFellowship" className="mb-20">
    <h2 className="text-2xl font-bold">Research Fellowship</h2>
    <p>Details about Research Fellowship...</p>
</section>
    </MainLayout>
  );
};

export default Services;
