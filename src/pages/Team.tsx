import MainLayout from "../layouts/MainLayout";

const Team = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Our Team</h1>
      <section>
        <h2 className="text-xl font-semibold">Current Team</h2>
        <p>Meet the professionals behind NRC.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Our Alumni</h2>
        <p>Past team members from different years.</p>
      </section>
    </MainLayout>
  );
};

export default Team;
