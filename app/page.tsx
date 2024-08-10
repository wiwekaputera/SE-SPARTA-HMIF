import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

const Portfolio = () => {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/" },
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]} />
        <Hero />
      </div>
    </main>
  );
}

export default Portfolio;