import MainLayout from "../layouts/MainLayout";

const Services = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Our Services</h1>
      <section>
        <h2 className="text-xl font-semibold">Community Awareness</h2>
        <ul className="list-disc pl-5">
          <li>NCDs Screening</li>
          <li>SRH Education</li>
          <li>Mental Health Education</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Research & Innovation</h2>
        <ul className="list-disc pl-5">
          <li>Innovative Projects</li>
          <li>Research Fellowship</li>
        </ul>
      </section>
    </MainLayout>
  );
};

export default Services;
