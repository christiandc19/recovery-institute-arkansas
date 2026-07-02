import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import ProgramsGrid from "./sections/ProgramsGrid/ProgramsGrid";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import "./Programs.css";

function Programs() {
  return (
    <>
      <InnerPageHero
        eyebrow="Programs"
        title="Substance Abuse Programs Built Around Recovery"
        text="Our programs provide structure, support, and practical tools for individuals working toward lasting recovery from alcohol and drug addiction."
        image="/images/programs-hero.webp"
      />
      <ProgramsGrid />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default Programs;