import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Hero from "./ui/home/hero";
import ProjectsContainer from "./ui/home/projectsContainer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Paul's Portfolio</h1>
        <Hero />
      </main>
      <ProjectsContainer />

      <Footer />
    </div>
  );
}
