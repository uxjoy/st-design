import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />

      <main className="w-full h-full">{children}</main>
    </section>
  );
};

export default MainLayout;
