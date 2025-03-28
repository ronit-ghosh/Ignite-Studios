import { Hero } from "@/components/Hero-Section/Hero";
import Team from "@/components/Team-Section/Team";
import UnderDevelopmet from "@/components/UnderDevelopmet";

export default function Home() {
  return (
    <>
      <UnderDevelopmet/>
      <Hero />
      {/* <Project /> */}
      <Team />
      {/* <Contact /> */}
    </>
  );
}
