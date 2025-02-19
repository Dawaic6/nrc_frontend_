import MainLayout from "../layouts/MainLayout";

const Publications = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Publications</h1>
      <section>
        <h2 className="text-xl font-semibold">Ongoing Research</h2>
        <p>Research still in progress. Disclaimer applies.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Published Research</h2>
        <p>Explore our published studies.</p>
      </section>
    </MainLayout>
  );
};

export default Publications;
