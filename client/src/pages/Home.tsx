import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
