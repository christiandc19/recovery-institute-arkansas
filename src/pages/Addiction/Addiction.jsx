import InnerPageHero from "../../components/Hero/InnerPageHero/InnerPageHero";
import CallToAction from "../../components/sections/CallToAction/CallToAction";
import HomeFAQ from "../Home/sections/HomeFAQ/HomeFAQ";
import AddictionGrid from "./sections/AddictionGrid/AddictionGrid";
import "./Addiction.css";

function Addiction() {
  return (
    <>
      <InnerPageHero
        eyebrow="Addiction Treatment"
        title="Substance Abuse Treatment for Lasting Recovery"
        text="The Recovery Institute of Arkansas provides outpatient support for individuals struggling with alcohol, opioid, heroin, fentanyl, cocaine, meth, and other substance use challenges."
        image="/images/addiction-hero.webp"
      />

      <AddictionGrid />

      <HomeFAQ />

      <CallToAction />
    </>
  );
}

export default Addiction;