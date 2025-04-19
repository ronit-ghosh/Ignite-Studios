import Contact from "@/components/Contact-Us-Section/Contact";
import { Hero } from "@/components/Hero-Section/Hero";
import Team from "@/components/Team-Section/Team";
import UnderDevelopmet from "@/components/UnderDevelopmet";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Project /> */}
      <Team />
      <Contact />
    </>
  );
}
