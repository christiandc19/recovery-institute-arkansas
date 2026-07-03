import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import AboutStory from "./sections/AboutStory/AboutStory";
import MissionValues from "./sections/MissionValues/MissionValues";
import WhyChooseAbout from "./sections/WhyChooseAbout/WhyChooseAbout";
import RecoveryProcess from "./sections/RecoveryProcess/RecoveryProcess";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import SEO from "../../components/SEO/SEO";
import seo from "../../data/seo";

import "./About.css";

function About() {
  return (
    <>
      <SEO {...seo.about} />
      <InnerPageHero
        eyebrow="About Us"
        title="Compassionate Recovery Support in Searcy, Arkansas"
        text="The Recovery Institute of Arkansas provides outpatient substance abuse treatment for individuals ready to take the next step toward lasting recovery."
        image="/images/about-hero.webp"
      />
      <AboutStory />
      <MissionValues />
      <WhyChooseAbout />
      <RecoveryProcess />
      <CallToAction />
    </>
  );
}

export default About;