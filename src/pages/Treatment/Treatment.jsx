import "./Treatment.css";

import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import TreatmentOverview from "./sections/TreatmentOverview/TreatmentOverview";
import TreatmentPrograms from "./sections/TreatmentPrograms/TreatmentPrograms";
import WhyOutpatient from "./sections/WhyOutpatient/WhyOutpatient";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import SEO from "../../components/SEO/SEO";
import seo from "../../data/seo";

function Treatment() {
  return (
    <>
      <SEO {...seo.treatment} />
      <InnerPageHero
        eyebrow="Treatment"
        title="Personalized Outpatient Treatment That Fits Your Life"
        text="Our evidence-based programs provide compassionate support while allowing you to continue work, school, and family responsibilities."
        image="/images/treatment-hero.webp"
      />
      <TreatmentOverview />
      <TreatmentPrograms />
      <WhyOutpatient />
      <HomeFAQ />
      <CallToAction />
    </>
  );
}

export default Treatment;