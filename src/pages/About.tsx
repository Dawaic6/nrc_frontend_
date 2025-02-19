import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <section>
        <h2 className="text-xl font-semibold">Background</h2>
        <p>Details about the history of NRC.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">NRC Founder</h2>
        <p>Information about the founder.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Mission & Vision</h2>
        <p>Our core mission and vision.</p>
      </section>
    </MainLayout>
  );
};

export default About;
