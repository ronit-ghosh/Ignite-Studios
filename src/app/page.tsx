import { About } from "@/components/About-Section/About";
import Contact from "@/components/Contact-Us-Section/Contact";
import { Hero } from "@/components/Hero-Section/Hero";
import Project from "@/components/Projects-Section/Project";
import Team from "@/components/Team-Section/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <Team />
      <About />
      <Contact />
    </>
  );
}
